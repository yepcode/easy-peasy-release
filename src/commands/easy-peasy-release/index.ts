import { Command } from '@oclif/core'
import NpmReleaser from './npm-releaser'
import GradleReleaser from './gradle-releaser'
import path = require('node:path')
import fs = require('node:fs')

export default class Release extends Command {
  releasers = [
    { file: 'package.json', releaser: NpmReleaser },
    { file: 'gradle.properties', releaser: GradleReleaser },
  ]

  async run(): Promise<void> {
    const releaser = this.releasers.find((releaser) => fs.existsSync(path.resolve(process.cwd(), releaser.file)))
    if (!releaser) {
      throw new Error('No version management file found.')
    }

    await releaser.releaser.run(['--file', releaser.file])
  }
}
