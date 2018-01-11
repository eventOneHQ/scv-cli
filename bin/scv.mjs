#!/usr/bin/env node

import program from 'commander'
import clc from 'cli-color'
import {scv} from '../index'
import * as pkg from '../package.json'

program
  .version(pkg.version)
  .option('-b, --buildnumber <buildnumber>', 'Build number to be set. ')
  .option('-n, --versionnumber <versionnumber>', 'Version number to be set.')
  .option('-c, --config <config>', 'Location of config.xml. Defaults to ./config.xml. e.g. /path/to/config.xml ')
  .parse(process.argv)

scv(program.versionnumber, program.buildnumber, program.config)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(clc.red(err))
  })
