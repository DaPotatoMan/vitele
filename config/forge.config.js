const { ignoreFiles } = require('./utils');

module.exports = {
   packagerConfig: {
      asar: true,
      ignore: [
         ...ignoreFiles('.', ['dist', 'package.json', 'node_modules', 'LICENSE']),
         /^\/node_modules\/((?!electron-squirrel-startup).)*$/,
      ],
   },
   makers: [
      {
         name: '@electron-forge/maker-squirrel',
         config: {
            name: 'app'
         }
      },
      {
         name: '@electron-forge/maker-zip',
         platforms: [
            'darwin'
         ]
      },
      {
         name: '@electron-forge/maker-deb',
         config: {}
      },
      {
         name: '@electron-forge/maker-rpm',
         config: {}
      }
   ]
};
