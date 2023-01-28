/* eslint-disable unicorn/prefer-module */
import Releaser from './releaser'
import Version from '../../lib/version'
const fs = require('fs')
import * as path from 'node:path'

export default class GradleReleaser extends Releaser {
  file: any
  contents: string | undefined
  versionLine!: string

  async readCurrentVersion(): Promise<Version> {
    this.file = path.resolve(process.cwd(), this.filename)
    this.contents = fs.readFileSync(this.file, 'utf8')
    const lines = fs.readFileSync(this.file, 'utf8').split(/\r?\n/)
    this.versionLine = lines.find((line: string) => line.toLowerCase().startsWith('version='))
    if (!this.versionLine) {
      throw new Error("'version' property not found in " + this.filename)
    }

    return new Version(this.versionLine.split('=')[1])
  }

  async updateVersion(version: Version): Promise<void> {
    const split = this.versionLine.split('=')
    const nextVersionLine = split[0] + '=' + version
    fs.writeFileSync(this.file, this.contents?.replace(this.versionLine, nextVersionLine))
    return Promise.resolve()
  }

  async addFilesToGit(): Promise<void> {
    await this.git.add(this.filename)
    return Promise.resolve()
  }
}
