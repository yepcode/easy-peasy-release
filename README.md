oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g easy-peasy-release
$ easy-peasy-release COMMAND
running command...
$ easy-peasy-release (--version)
easy-peasy-release/0.0.0 darwin-x64 node-v18.12.1
$ easy-peasy-release --help [COMMAND]
USAGE
  $ easy-peasy-release COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`easy-peasy-release hello PERSON`](#easy-peasy-release-hello-person)
* [`easy-peasy-release hello world`](#easy-peasy-release-hello-world)
* [`easy-peasy-release help [COMMAND]`](#easy-peasy-release-help-command)
* [`easy-peasy-release plugins`](#easy-peasy-release-plugins)
* [`easy-peasy-release plugins:install PLUGIN...`](#easy-peasy-release-pluginsinstall-plugin)
* [`easy-peasy-release plugins:inspect PLUGIN...`](#easy-peasy-release-pluginsinspect-plugin)
* [`easy-peasy-release plugins:install PLUGIN...`](#easy-peasy-release-pluginsinstall-plugin-1)
* [`easy-peasy-release plugins:link PLUGIN`](#easy-peasy-release-pluginslink-plugin)
* [`easy-peasy-release plugins:uninstall PLUGIN...`](#easy-peasy-release-pluginsuninstall-plugin)
* [`easy-peasy-release plugins:uninstall PLUGIN...`](#easy-peasy-release-pluginsuninstall-plugin-1)
* [`easy-peasy-release plugins:uninstall PLUGIN...`](#easy-peasy-release-pluginsuninstall-plugin-2)
* [`easy-peasy-release plugins update`](#easy-peasy-release-plugins-update)

## `easy-peasy-release hello PERSON`

Say hello

```
USAGE
  $ easy-peasy-release hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/vv/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `easy-peasy-release hello world`

Say hello world

```
USAGE
  $ easy-peasy-release hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ easy-peasy-release hello world
  hello world! (./src/commands/hello/world.ts)
```

## `easy-peasy-release help [COMMAND]`

Display help for easy-peasy-release.

```
USAGE
  $ easy-peasy-release help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for easy-peasy-release.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.22/src/commands/help.ts)_

## `easy-peasy-release plugins`

List installed plugins.

```
USAGE
  $ easy-peasy-release plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ easy-peasy-release plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.12/src/commands/plugins/index.ts)_

## `easy-peasy-release plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ easy-peasy-release plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ easy-peasy-release plugins add

EXAMPLES
  $ easy-peasy-release plugins:install myplugin 

  $ easy-peasy-release plugins:install https://github.com/someuser/someplugin

  $ easy-peasy-release plugins:install someuser/someplugin
```

## `easy-peasy-release plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ easy-peasy-release plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ easy-peasy-release plugins:inspect myplugin
```

## `easy-peasy-release plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ easy-peasy-release plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ easy-peasy-release plugins add

EXAMPLES
  $ easy-peasy-release plugins:install myplugin 

  $ easy-peasy-release plugins:install https://github.com/someuser/someplugin

  $ easy-peasy-release plugins:install someuser/someplugin
```

## `easy-peasy-release plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ easy-peasy-release plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ easy-peasy-release plugins:link myplugin
```

## `easy-peasy-release plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ easy-peasy-release plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ easy-peasy-release plugins unlink
  $ easy-peasy-release plugins remove
```

## `easy-peasy-release plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ easy-peasy-release plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ easy-peasy-release plugins unlink
  $ easy-peasy-release plugins remove
```

## `easy-peasy-release plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ easy-peasy-release plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ easy-peasy-release plugins unlink
  $ easy-peasy-release plugins remove
```

## `easy-peasy-release plugins update`

Update installed plugins.

```
USAGE
  $ easy-peasy-release plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
