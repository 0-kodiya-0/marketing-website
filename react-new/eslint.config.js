import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import pluginQuery from '@tanstack/eslint-plugin-query'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    { ignores: ['dist'] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser
            }
        }
    },
    // React Hooks config
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            'react-hooks': reactHooks
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn'
        }
    },
    // React Refresh config
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            'react-refresh': reactRefresh
        },
        rules: {
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ]
        }
    },
    // TanStack Query config
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@tanstack/query': pluginQuery
        },
        // We'll check what rules are actually available in pluginQuery
        rules: {
            // Let's only use rules we're sure exist
            '@tanstack/query/exhaustive-deps': 'error'
            // Removed other rules that may not exist
        }
    }
]