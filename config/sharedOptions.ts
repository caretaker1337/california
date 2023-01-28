import { eslintPlugin } from "esbuild-plugin-eslinter";
import { esbuildTsChecker } from "esbuild-plugin-ts-checker";
import { BuildOptions } from "esbuild";
import { cwd } from "process";
import { resolve } from "path";

const rootDir: string = cwd();
const sharedOptions: BuildOptions = {
  bundle: true,
  charset: "utf8",
  entryNames: "bundle",
  entryPoints: [resolve(rootDir, "./src/index.tsx")],
  incremental: true,
  plugins: [
    eslintPlugin(),
    esbuildTsChecker({
      enableBuild: false,
      failOnError: true,
      tsconfig: resolve(rootDir, "./tsconfig.json"),
    }),
  ],
  preserveSymlinks: true,
  pure: ["document.createElement"],
  resolveExtensions: [".js", ".ts", ".tsx"],
  treeShaking: true,
};

export { sharedOptions };
