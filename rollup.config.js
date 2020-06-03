import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: ['packages/claro-app/claro-app.js'],
    output: {
        file: './build/index.js',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel()
    ]
};