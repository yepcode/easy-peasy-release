/* eslint-disable unicorn/prefer-module */
import Releaser from './releaser'
import Version from '../../lib/version'
import * as path from 'node:path'
const util = require('node:util')
const exec = util.promisify(require('node:child_process').exec)
const packageJson = require('@npmcli/package-json')

export default class NpmReleaser extends Releaser {
  pkgJson: any

  async readCurrentVersion(): Promise<Version> {
    this.pkgJson = await packageJson.load(path.resolve(process.cwd()))
    return new Version(this.pkgJson.content.version)
  }

  async updateVersion(version: Version): Promise<void> {
    this.pkgJson.update({
      version: version.toString(),
    })
    await this.pkgJson.save()
    return exec('npm install')
  }
}
