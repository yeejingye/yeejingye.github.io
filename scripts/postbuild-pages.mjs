import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const outDir = path.join(repoRoot, "docs");

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const cnameSrc = path.join(repoRoot, "CNAME");
  const cnameDest = path.join(outDir, "CNAME");
  if (await fileExists(cnameSrc)) {
    await fs.copyFile(cnameSrc, cnameDest);
  }

  const noJekyllPath = path.join(outDir, ".nojekyll");
  await fs.writeFile(noJekyllPath, "");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
