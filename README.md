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
```

*Note: For a global install of `-g scv-cli`, OSX/Linux users may need to prefix the command with `sudo` or can setup [proper file permissions on OSX for npm](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/) to install without `sudo`.*


## Usage:

### Command Line
```bash
scv [options] -n <versionnumber> -b <buildnumber>
```
__Example:__

```bash
scv -n 1.4.5 -b 445
```
__Command-line flags/options:__
```
-h, --help                           output usage information
-V, --version                        output the version number
-b, --buildnumber <buildnumber>      Build number to be set.
-n, --versionnumber <versionnumber>  Version number to be set.
-c, --config <config>                Location of config.xml. Defaults to ./config.xml. e.g. /path/to/config.xml
```

### Library

__CJS Example:__
```javascript
const scv = require('scv-cli')

scv(versionnumber, buildnumber, configfile)
  .then(res => {
    // do something
  })
  .catch(err => {
    // handle error
  })
```
__MJS Example:__
```javascript
import {scv} from 'scv-cli'

scv(versionnumber, buildnumber, configfile)
  .then(res => {
    // do something
  })
  .catch(err => {
    // handle error
  })
```
