---
title: SCV-CLI
---
# SCV-CLI
[![Build Status](https://api.travis-ci.org/Filiosoft/scv-cli.svg?branch=master)](http://travis-ci.org/Filiosoft/scv-cli)
[![NPM Version](https://img.shields.io/npm/v/scv-cli.svg?style=flat)](https://www.npmjs.org/package/scv-cli)
[![NPM Downloads](https://img.shields.io/npm/dm/scv-cli.svg?style=flat)](https://www.npmjs.org/package/scv-cli)
[![dependencies Status](https://david-dm.org/filiosoft/scv-cli/status.svg)](https://david-dm.org/filiosoft/scv-cli)
[![Known Vulnerabilities](https://snyk.io/test/github/filiosoft/scv-cli/badge.svg)](https://snyk.io/test/github/filiosoft/scv-cli)

Command line interface to set the version number of a Apache Cordova application for iOS and Android.

## Installing

```bash
npm install -g scv-cli
```

*Note: For a global install of `-g scv-cli`, OSX/Linux users may need to prefix the command with `sudo` or can setup [proper file permissions on OSX for npm](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/) to install without `sudo`.*


## Usage: 
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
