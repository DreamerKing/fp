import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" assert { type: "json" };

const input = "./src/index.js";

export default [
  {
    input,
    output: {
      name: pkg.name,
      file: pkg.browser,
      exports: "named",
      format: "umd",
    },
    plugins: [commonjs()],
  },
  {
    input,
    output: [
      {
        file: pkg.module,
        format: "es",
      },
    ],
  },
];
