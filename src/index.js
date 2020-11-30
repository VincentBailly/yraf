import { fork } from "child_process";
import { join as pathJoin } from "path";

export function resolveAndFetch() {
  return new Promise((resolve, reject) => {
    let result = undefined;
    try {
      const child = fork(pathJoin(__dirname, "cli", "index.js"), ["--ignore-scripts"], { stdio: "inherit" });
      child.on("message", m => {
        result = m;
      });
      child.on("exit", (code) => {
        if (code === null || code === 0) {
          return resolve(result);
        }
        reject(`Installation exited with code ${code}`);
      })
    } catch (e) {
      reject(e)
    }
  });
}

if (require.main === module) {
  install().then(r => console.log(JSON.stringify(r, undefined, 2))).catch(() => process.exit(1))
}
