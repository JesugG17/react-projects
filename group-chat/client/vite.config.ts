import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {find: '@modules', replacement: path.resolve(__dirname, './src/modules')},
            {find: '@context', replacement: path.resolve(__dirname, './src/common/context')},
            {find: '@hooks', replacement: path.resolve(__dirname, './src/common/hooks')},
            {find: '@services', replacement: path.resolve(__dirname, './src/common/services')},
            {find: '@types', replacement: path.resolve(__dirname, './src/common/types')},
            {find: '@utils', replacement: path.resolve(__dirname, './src/common/utils')},
        ]
    }
});
