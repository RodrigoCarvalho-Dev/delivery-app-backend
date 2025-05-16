import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import parser from '@typescript-eslint/parser';
import eslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
    },
    ignores: ['node_modules', 'dist', 'coverage', '*.js'],

    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',

      // Boas práticas
      eqeqeq: ['error', 'always'],
      'no-console': 'off',
      'no-debugger': 'error',
      curly: ['error', 'all'],

      'prettier/prettier': 'error',
    },
  },
  eslintPluginPrettierRecommended,
];
