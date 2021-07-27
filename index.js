/* eslint-disable @typescript-eslint/no-var-requires */

require('ts-node').register({
   project: './tsconfig.electron.json',
   typeCheck: false,
   transpileOnly: true,
   files: true,
});

require('./src/main/app');
