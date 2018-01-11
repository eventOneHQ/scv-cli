import fs from 'fs'
import clc from 'cli-color'
import xmldom from 'xmldom'
import XMLSerializer from './node_modules/xmldom/dom'
const DOMParser = xmldom.DOMParser
//const XMLSerializer = xmldom.XMLSerializerr
const serializer = new XMLSerializer.XMLSerializer()

export const scv = (versionnumber, buildnumber, configfile = 'config.xml') => {
  return new Promise((resolve, reject) => {
    
    if (fs.existsSync(configfile) && versionnumber && buildnumber) {
      fs.readFile(configfile, 'utf-8', (err, data) => {
        if (err) {
          return reject(err)
        }

        const doc = new DOMParser().parseFromString(data, 'application/xml')
        console.log('Opening project\'s config.xml file:', clc.green(configfile))

        doc.documentElement.setAttribute('version', versionnumber)
        doc.documentElement.setAttribute('ios-CFBundleVersion', buildnumber)
        doc.documentElement.setAttribute('android-versionCode', buildnumber)

        console.log(`Setting version number to ${clc.green(doc.documentElement.getAttribute('version'))}`)
        console.log(`Setting iOS build number to ${clc.green(doc.documentElement.getAttribute('ios-CFBundleVersion'))}`)
        console.log(`Setting Android build number to ${clc.green(doc.documentElement.getAttribute('android-versionCode'))}`)

        const writetofile = serializer.serializeToString(doc)
        fs.writeFile('config.xml', writetofile, err => {
          if (err) {
            return reject(err)
          }
          return resolve('Saved config.xml!')
        })
      })
    } else {
      if (!fs.existsSync(configfile)) {
        return reject((new Error(`${configfile} doesn't seem to exist.`)))
      }
      if (!versionnumber) {
        return reject(new Error('Please specify a version number.'))
      }
      if (!buildnumber) {
        return reject((new Error('Please specify a build number.')))
      }
    }
  })
}
