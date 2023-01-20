import { Command } from '@oclif/core'
import NpmReleaser from './npm-releaser'

export default class Release extends Command {
  async run(): Promise<void> {
    await NpmReleaser.run()
  }
}
