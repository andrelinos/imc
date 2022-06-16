import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'node:path';

export default defineConfig({
    resolve: {
        alias: {
            '~/components': path.resolve(__dirname, './src/components'),
            '~/hooks': path.resolve(__dirname, './src/hooks'),
            '~/services': path.resolve(__dirname, './src/services'),
            '~/styles': path.resolve(__dirname, './src/styles'),
        },
    },
    plugins: [react()],
});
