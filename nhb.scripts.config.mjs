// @ts-check

import { defineScriptConfig, fixJsExtensions, fixTypeExports } from 'nhb-scripts';

export default defineScriptConfig({
    format: {
        args: ['--write'],
        files: ['src'],
        ignorePath: '.prettierignore',
    },
    lint: { folders: ['src'], patterns: ['**/*.ts'] },
    fix: { folders: ['src'], patterns: ['**/*.ts'] },
    build: {
        distFolder: 'dist',
        commands: [
            {
                cmd: 'tsc',
                args: ['-p', 'tsconfig.cjs.json']
            },
            {
                cmd: 'tsc',
                args: ['-p', 'tsconfig.esm.json'],
                options: { stdio: 'inherit' }
            }
        ],
        after: [
            async () => await fixJsExtensions('dist/esm'),
            async () => await fixTypeExports({
                distPath: 'dist/dts',
                packageJsonPath: 'package.json',
                typeFileCandidates: ['types.d.ts', 'interfaces.d.ts'],
                extraStatic: {
                    './types': {
                        types: './dist/dts/types/index.d.ts',
                        default: './dist/dts/types/index.d.ts'
                    },
                }
            }),
        ],
    },
    commit: {
        runFormatter: true
    },
    count: {
        defaultPath: 'src/index.ts',
        excludePaths: ['node_modules', 'dist', 'build']
    }
});

