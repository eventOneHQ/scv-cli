#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');
var DOMParser = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;
var serializer = new XMLSerializer();
var clc = require('cli-color');
var pkgv = require('./package.json').version;
var configfile;

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}


program
    .version(pkgv)
    .option('-b, --buildnumber <buildnumber>', 'Build number to be set. ')
    .option('-n, --versionnumber <versionnumber>', 'Version number to be set.')
    .option('-c, --config <config>', 'Location of config.xml. Defaults to ./config.xml. e.g. /path/to/config.xml ')
    .parse(process.argv);

if (!program.config) {
    configfile = "config.xml";
} else {
    configfile = program.config;
}

if (fs.existsSync(configfile) && program.versionnumber && program.buildnumber) {
    readModuleFile('./logo.txt', function (err, text) {
        console.log(text);
    });
    fs.readFile(configfile, 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }

        var doc = new DOMParser().parseFromString(data, 'application/xml');
        console.log('Opening project\'s config.xml file:', clc.green(configfile));

        doc.documentElement.setAttribute('version', program.versionnumber);
        doc.documentElement.setAttribute('ios-CFBundleVersion', program.buildnumber);
        doc.documentElement.setAttribute('android-versionCode', program.buildnumber);

        console.log('Setting version number to', clc.green(doc.documentElement.getAttribute('version')));
        console.log('Setting iOS build number to', clc.green(doc.documentElement.getAttribute('ios-CFBundleVersion')));
        console.log('Setting Android build number to', clc.green(doc.documentElement.getAttribute('android-versionCode')));

        var writetofile = serializer.serializeToString(doc);
        //console.log(writetofile); 
        fs.writeFile('config.xml', writetofile, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("Saved config.xml!");
        });
    });
} else {
    if (!fs.existsSync(configfile)) {
        console.log(clc.red(configfile, 'doesn\'t seem to exist. '));
    }
    if (!program.versionnumber) {
        console.log(clc.red('Please specify a version number.'));
    }
    if (!program.buildnumber) {
        console.log(clc.red('Please specify a build number.'));
    }
}
