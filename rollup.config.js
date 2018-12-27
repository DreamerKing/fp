import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";
import builtins from 'rollup-plugin-node-builtins';
import pkg from "./package.json";
const input = "./src/index.js";
export default [
    {
        input,
        output: {
            name: 'Demo',
            file: pkg.browser,
            exports: 'named',
            format: 'umd'
        },
        plugins: [
            resolve(), 
            commonjs(),
            builtins(),
           // uglify()
        ]
    }, {
        input,
        output: [
            { 
                file: pkg.module, 
                format: 'es' 
            }
        ]
    }
]