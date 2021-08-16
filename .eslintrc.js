module.exports = {
   env: {
      es6: true,
      node: true,
      browser: true
   },
   extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:import/electron',
      'plugin:import/typescript',
      'airbnb-typescript/base'
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      project: 'tsconfig.eslint.json',
      tsconfigRootDir: '.',
      extraFileExtensions: ['.vue']
   },
   settings: {
      'import/resolver': {
         node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
         typescript: {}
      },
   },

   overrides: [
      {
         files: ['*.vue'],
         parser: 'vue-eslint-parser',
         parserOptions: {
            parser: '@typescript-eslint/parser',
         },
         rules: {
            'no-undef': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',

            'vue/html-indent': ['error', 3],
            'vue/component-tags-order': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/max-attributes-per-line': [
               'error',
               {
                  singleline: 3,
                  multiline: {
                     max: 1,
                     allowFirstLine: false,
                  },
               },
            ],
         },
      },
   ],

   rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'off',

      'max-len': ['error', 150],
      'no-plusplus': 'off',
      'comma-dangle': 'off',
      'linebreak-style': 'off',
      'global-require': 'warn',

      indent: 'off',
      '@typescript-eslint/indent': ['error', 3],
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-var-requires': 'warn',

      'no-param-reassign': 'warn',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': [
         'error',
         {
            devDependencies: true,
         },
      ]
   },
};
