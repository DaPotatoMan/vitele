const { readdirSync } = require('fs');

function ignoreFiles(dir = '.', exclude = []) {
   const dirList = readdirSync(dir);
   const list = dirList.flatMap((path) => {
      if (exclude.includes(path)) return [];
      return [`^(\/${path}$)`];
   });

   return list;
}

function ignoreModulesExcept(deps = []) {
   const regex = new RegExp(`^/node_modules/((?!${deps.join('|')}).)*$`);
   return regex;
}

module.exports = {
   ignoreFiles,
   ignoreModulesExcept
};
