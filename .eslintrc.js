module.exports = {
   env: {
      es6: true,
      browser: true,
      node: true,
   },
   plugins: ['import'],
   extends: [
      'plugin:vue/vue3-strongly-recommended',
      'plugin:vue/vue3-recommended',
      'plugin:vue/vue3-recommended',

      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'airbnb-typescript/base',
      'plugin:@typescript-eslint/recommended',
   ],

   parserOptions: {
      ecmaVersion: 2021,
      project: './tsconfig.json',
      sourceType: 'module'
   },

   settings: {
      'import/resolver': {
         node: { extensions: ['.js', '.mjs', '.ts', '.vue'] },
         typescript: {}
      },
   },

   overrides: [
      {
         files: ['*.ts'],
         parser: '@typescript-eslint/parser',
         plugins: ['@typescript-eslint', 'import']
      },
      {
         files: ['*.vue'],
         parser: 'vue-eslint-parser',
         parserOptions: {
            parser: '@typescript-eslint/parser',
         },
         rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
         },
      },
   ],

   rules: {
      'no-console': 'off',
      'no-debugger': 'off',

      'max-len': ['error', 150],
      'no-plusplus': 'off',
      'comma-dangle': 'off',
      'linebreak-style': 'off',

      indent: ['error', 3],
      '@typescript-eslint/indent': ['error', 3],
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/no-empty-function': 'off',

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
