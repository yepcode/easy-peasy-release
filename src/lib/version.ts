/* eslint-disable radix */

export default class Version {
  maior: number
  minor: number
  patch: number

  constructor(version: string) {
    const matches = version.match(/^(?<maior>\d{1,2})\.(?<minor>\d{1,2})\.(?<patch>\d{1,2})$/)
    if (!matches || !matches.groups) {
      throw new Error(`Version format is invalid: ${version}`)
    }

    this.maior = Number.parseInt(matches.groups.maior)
    this.minor = Number.parseInt(matches.groups.minor)
    this.patch = Number.parseInt(matches.groups.patch)
  }

  copy(): Version {
    return new Version(this.toString())
  }

  bumpMaior(): Version {
    this.maior++
    this.minor = 0
    this.patch = 0
    return this
  }

  bumpMinor(): Version {
    this.minor++
    this.patch = 0
    return this
  }

  bumpPatch(): Version {
    this.patch++
    return this
  }

  toString(): string {
    return this.maior + '.' + this.minor + '.' + this.patch
  }
}
