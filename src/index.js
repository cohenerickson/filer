const Buffer = require("buffer");

let fs = null;
let Filer = null;

module.exports = Filer = {
  FileSystem: require('./filesystem/interface.js'),
  Buffer: Buffer,
  // We previously called this Path, but node calls it path. Do both
  Path: require('./path.js'),
  path: require('./path.js'),
  Errors: require('./errors.js'),
  Shell: require('./shell/shell.js'),
  /**
   * @deprecated Importing filer from your webpack config is not recommended.
   * 
   * The filer `FilerWebpackPlugin` class is exposed directly. 
   * 
   * ```
   * const { FilerWebpackPlugin } = require('filer/webpack');
   * ```
   */
  FilerWebpackPlugin: require('./webpack-plugin'),
};

// Add a getter for the `fs` instance, which returns
// a Filer FileSystem instance, using the default provider/flags.
Object.defineProperty(Filer, 'fs', {
  enumerable: true,
  get() {
    if(!fs) {
      fs = new Filer.FileSystem();
    }
    return fs;
  }
});
