const { readdirSync } = require('fs');

function ignoreFiles(dir = '.', exclude = []) {
   const dirList = readdirSync(dir);
   const list = dirList.flatMap((path) => {
      if (exclude.includes(path)) return [];
      return [`^(\/${path}$)`];
   });

   return list;
}

module.exports = {
   ignoreFiles
};
