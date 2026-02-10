import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

export default tseslint.config(
  // 1. 設定忽略目錄
  { ignores: ['dist', 'node_modules', '.pnpm-store'] },
  
  // 2. 基礎配置與 TypeScript 支援
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: '19.0' }, // 確保 ESLint 知道我們在用 React 19
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      prettier,
    },
    rules: {
      // 載入 React Hooks 推薦規則
      ...reactHooks.configs.recommended.rules,
      
      // Vite HMR 相關規則
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // React 19 不再強制要求在檔案開頭 import React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // --- 排版與格式化 (Prettier) ---
      'prettier/prettier': [
        'error',
        {
          // 這裡可以複寫 .prettierrc 的設定，或者保持空白讀取該檔案
        },
      ],
      
      // 自定義規則：例如禁止使用 console.log (建議設為 warn)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // 3. 關閉所有與 Prettier 衝突的 ESLint 規則 (必須放在最後)
  configPrettier
)