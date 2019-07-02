# SCV-CLI

[![Build Status](https://api.travis-ci.org/eventOneHQ/scv-cli.svg?branch=master)](http://travis-ci.org/eventOneHQ/scv-cli)
[![NPM Version](https://img.shields.io/npm/v/scv-cli.svg?style=flat)](https://www.npmjs.org/package/scv-cli)
[![NPM Downloads](https://img.shields.io/npm/dm/scv-cli.svg?style=flat)](https://www.npmjs.org/package/scv-cli)
[![dependencies Status](https://david-dm.org/eventOneHQ/scv-cli/status.svg)](https://david-dm.org/eventOneHQ/scv-cli)
[![Known Vulnerabilities](https://snyk.io/test/github/eventOneHQ/scv-cli/badge.svg)](https://snyk.io/test/github/eventOneHQ/scv-cli)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Command line interface to set the version number of a Apache Cordova application for iOS and Android.

## Installing

```bash
npm install -g scv-cli

# or if you just want to use it locally
npx scv-cli -v 1.4.5 -b 445
```

_Note: For a global install of `-g scv-cli`, OSX/Linux users may need to prefix the command with `sudo` or can setup [proper file permissions on OSX for npm](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/) to install without `sudo`._

## Usage:

### Command Line

```bash
scv [options] -v <version> -b <build>
```

**Example:**

```bash
scv -v 1.4.5 -b 445
```

**Command-line flags/options:**

```
-V, --version           output the version number
-v, --semver <version>  Version number to be set.
-b, --build <build>     Build number to be set.
-c, --config <config>   Location of config.xml (e.g. /path/to/config.xml). Defaults to ./config.xml.
-h, --help              output usage information
```

### Library

**Example:**

```javascript
// CJS
const { SCV } = require('scv-cli')
// or MJS
import * as SCVClass from 'scv-cli'
const { SCV } = SCVClass.default


const scv = new SCV({
  showLogs: true
})
scv
  .setVersion(version, build, configFile)
  .then(res => {
    // do something
  })
  .catch(err => {
    // handle error
  })
```
