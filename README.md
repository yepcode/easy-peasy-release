Easy peasy release
=================
Tool for our internal releases but it may help you as well!


[![Version](https://img.shields.io/npm/v/easy-peasy-release)](https://www.npmjs.com/package/easy-peasy-release)
[![License](https://img.shields.io/npm/l/easy-peasy-release)](https://github.com/trileuco/easy-peasy-release/blob/main/LICENSE)

**How it works**:

1. Run `easy-pease-release`. See [Usage](#Usage) section for details
2. It will look for a package.json
3. It bumps minor version by default but will ask you politely if you want to bump to a different one.
4. Creates a new commit and an annotated tag with the new version.
5. Ask you if you want to push to your remote.


# Install

Install globally (add to your PATH):

```sh-session
$ npm install -g easy-peasy-release
```

# Usage

Just run:
```sh-session
$ easy-peasy-release
```

# License
MIT
