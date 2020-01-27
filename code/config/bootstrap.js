/**
 * @module bootstrap
 * Contains functions and setting that will be used at time of starting the app
 */
const fs = require("fs");
const join = require("path").join;
const util = require("../utils/global.util");
const servicesDir = join(process.cwd(), "services");

const ls = util
  .listAllFiles(servicesDir)
  .filter(file => ~file.indexOf("model.js"));

module.exports = ls;
