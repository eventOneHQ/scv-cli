const fs = require('fs-extra')
const clc = require('cli-color')
const xmldom = require('xmldom')
const XMLSerializer = require('xmldom').XMLSerializer

const DOMParser = xmldom.DOMParser
const serializer = new XMLSerializer()

/**
 * SCV class
 */
class SCV {
  /**
  * Creates a SCV instance
  * @param {object} opts SCV options
  * @param {boolean} [opts.showLogs=false] Show console logs?
  * @example
  * const scv = new SCV({
  *   showLogs: true
  * })
  */
  constructor (opts = { showLogs: false }) {
    this.opts = opts
  }

  /**
   * Prints to stdout with newline if showLogs is true (exact same API as `console.log`)
   * @private
   * @param {*} message The console message
   * @param  {...any} optionalParams The console params
   */
  log (message, ...optionalParams) {
    if (this.opts.showLogs) {
      console.log(message, ...optionalParams)
    }
  }

  /**
   * Set a Cordova app version and build numbers
   * @param {string} versionNumber Version number to be set
   * @param {string} buildNumber Build number to be set
   * @param {string} [configFile=config.xml] Location of `config.xml` (e.g. `/path/to/config.xml`). Defaults to `./config.xml`.
   *
   * @example
   * await scv.setVersion('1.4.5', '34')
   */
  async setVersion (versionNumber, buildNumber, configFile = 'config.xml') {
    console.log(this)
    try {
      await fs.stat(configFile)
    } catch (err) {
      throw new Error(`${configFile} doesn't seem to exist.`)
    }

    if (!versionNumber) {
      throw new Error('Please specify a version number.')
    }
    if (!buildNumber) {
      throw new Error('Please specify a build number.')
    }

    try {
      const data = await fs.readFile(configFile, 'utf-8')

      const doc = new DOMParser().parseFromString(data, 'application/xml')
      this.log(
        `Opening project's config.xml file: ${clc.green(configFile)}`
      )

      doc.documentElement.setAttribute('version', versionNumber)
      doc.documentElement.setAttribute('ios-CFBundleVersion', buildNumber)
      doc.documentElement.setAttribute('android-versionCode', buildNumber)

      this.log(`Setting version number to ${versionNumber}`)
      this.log(`Setting iOS build number to ${buildNumber}`)
      this.log(`Setting Android build number to ${buildNumber}`)

      const modifiedFile = serializer.serializeToString(doc)
      await fs.writeFile(configFile, modifiedFile)

      return 'Saved config.xml!'
    } catch (err) {
      throw err
    }
  }
}

module.exports = { SCV }
