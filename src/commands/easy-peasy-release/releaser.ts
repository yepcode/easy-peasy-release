/* eslint-disable unicorn/prefer-module */
import { Command, Config, Flags } from '@oclif/core'
import Version from '../../lib/version'
import TaskRenderer from '../../lib/task-runner'
import color from '@oclif/color'
import { simpleGit, SimpleGit } from 'simple-git'
const inquirer = require('inquirer')

export default abstract class Releaser extends Command {
  filename!: string
  git: SimpleGit

  static flags = {
    file: Flags.string({
      required: true,
    }),
  }

  constructor(argv: string[], config: Config) {
    super(argv, config)
    this.git = simpleGit()
  }

  abstract readCurrentVersion(): Promise<Version>

  abstract updateVersion(version: Version): Promise<void>

  abstract addFilesToGit(): Promise<void>

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Releaser)
    this.filename = flags.file

    const currentBranch = await this.git.revparse(['--abbrev-ref', 'HEAD'])
    const currentVersion = await this.readCurrentVersion()
    const defaultNextVersion = (args.version && new Version(args.version)) || this.generateNextVersion(currentVersion)
    const { changeNextVersion } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'changeNextVersion',
        message: () => `preparing release ${color.cyan(defaultNextVersion)}. Do you want to choose another version?`,
        default: false,
      },
    ])
    const nextVersion = changeNextVersion ? await this.askForNextVersion(currentVersion) : defaultNextVersion
    const versionLabel = `v${nextVersion}`
    const tasks = new TaskRenderer([
      {
        title: color.bold(`bumping version in ${color.gray(this.filename)} from ${color.cyan(currentVersion)} to ${color.cyan(nextVersion)}`),
        task: () => this.updateVersion(nextVersion),
      },
      {
        title: color.bold(`commiting ${color.gray(this.filename)}`),
        task: async () => {
          await this.addFilesToGit()
          return this.git.commit(`Release ${versionLabel}`)
        },
      },
      {
        title: color.bold(`tagging release ${color.bold(versionLabel)}`),
        task: async (ctx) => {
          await this.git.tag(['-a', versionLabel, '-m', `Bump version to ${nextVersion}`])
          ctx.tagInfo = await this.git.show([versionLabel])
          return ctx.tagInfo
        },
      },
    ])
    await tasks
      .run()
      .then((ctx) => {
        this.logTag(ctx.tagInfo)
      })
      .catch(console.error)

    const pushSentence = `git push --follow-tags origin ${currentBranch}`
    const { pushToRemote } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'pushToRemote',
        message: () => `is everything ok? do you want to ${color.gray(pushSentence)} ?`,
        default: false,
      },
    ])
    if (pushToRemote) {
      await this.git.push(['--follow-tags', 'origin', currentBranch])
      this.log(color.bold(`${color.greenBright('✔')} Release completed.`))
    }
  }

  async askForNextVersion(currentVersion: Version): Promise<Version> {
    const { pickedVersion } = await inquirer.prompt([
      {
        type: 'list',
        message: 'choose a version',
        name: 'pickedVersion',
        choices: [
          {
            name: currentVersion.copy().bumpPatch(),
          },
          {
            name: currentVersion.copy().bumpMinor(),
            checked: true,
          },
          {
            name: currentVersion.copy().bumpMaior(),
          },
        ],
        validate(answer: any) {
          if (answer.length === 0) {
            return 'You must choose at least one topping.'
          }

          return true
        },
      },
    ])
    return pickedVersion
  }

  logTag(tagInfo: string): void {
    const lines = tagInfo.split('\n')
    const longest = [...lines].sort(function (a, b) {
      return b.length - a.length
    })[0]

    this.log('+' + [...'-'.repeat(longest.length + 7)].join('') + '+')
    this.log(
      lines
        .map((line) => {
          const length = line.length
          if (line.startsWith('-')) {
            line = color.red(line)
          } else if (line.startsWith('+')) {
            line = color.green(line)
          } else if (line.startsWith('tag') || line.startsWith('commit')) {
            line = color.yellow(line)
          } else if (line.startsWith('@@')) {
            line = color.cyan(line)
          }

          line = `| ${line} ${Array.from({ length: longest.length - length + 5 }).join(' ')} |`
          return line
        })
        .join('\n'),
    )
    this.log('+' + [...'-'.repeat(longest.length + 7)].join('') + '+')
  }

  generateNextVersion(current: Version): Version {
    const next = current.copy()
    return next.bumpMinor()
  }
}
