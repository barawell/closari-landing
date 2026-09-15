import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync } from "fs";
import path from "path";

mkdirSync("public/assets", { recursive: true });
copyFileSync("index.html", "public/index.html");
for (const name of readdirSync("assets")) {
  const src = path.join("assets", name);
  if (name.endsWith(".b64")) {
    writeFileSync(path.join("public/assets", name.slice(0, -4)), Buffer.from(readFileSync(src, "utf8"), "base64"));
  } else {
    copyFileSync(src, path.join("public/assets", name));
  }
}
console.log("wrote public/");
