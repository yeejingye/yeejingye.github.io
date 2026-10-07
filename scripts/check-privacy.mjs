import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const read = (file) => readFileSync(file, 'utf8');
const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const file = path.join(dir, name);
  return statSync(file).isDirectory() ? walk(file) : [file];
});
const assets = walk('dist').filter((file) => /\.(html|js|css)$/.test(file));
for (const file of assets) {
  const content = read(file);
  assert(!/googletagmanager\.com|google-analytics\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(content), `Third-party tracking/font resource in ${file}`);
  assert(!/react-ga4/.test(content), `Analytics dependency in ${file}`);
  if (file.endsWith('.css')) {
    assert(!/@import[^;]*https?:|url\(["']?https?:/i.test(content), `Remote CSS resource in ${file}`);
  }
}
for (const file of ['dist/index.html', 'dist/404.html']) {
  const html = read(file);
  const policy = html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)?.[1];
  assert(policy?.includes("connect-src 'self'"), `Missing connection restriction in ${file}`);
  assert(policy.includes("object-src 'none'"), `Missing object restriction in ${file}`);
  assert(!policy.includes("'unsafe-eval'"), `Unsafe evaluation in ${file}`);
  assert(html.includes('name="referrer" content="strict-origin-when-cross-origin"'), `Missing referrer policy in ${file}`);
  for (const [, attributes, script] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/\bsrc=/.test(attributes) || !script.trim()) continue;
    const hash = createHash('sha256').update(script).digest('base64');
    assert(policy.includes(`'sha256-${hash}'`), `Inline script is blocked by CSP in ${file}`);
  }
}
for (const family of ['jakarta', 'serif']) {
  const css = read(`public/fonts/${family}.css`);
  assert(read(`public/fonts/${family}-OFL.txt`).includes('SIL OPEN FONT LICENSE'));
  for (const [, url] of css.matchAll(/url\(([^)]+)\)/g)) {
    assert(url.startsWith('/fonts/'), 'Fonts must be local');
    assert(readFileSync(`public${url}`).length > 1000, `Missing font ${url}`);
  }
}
assert(!read('.github/workflows/pages.yml').includes('VITE_GA_ID'), 'Deployment can enable GA');
assert(!read('package.json').includes('react-ga4'), 'Analytics dependency remains');
console.log('Privacy checks passed: local fonts, no tracking resources, valid CSP hashes and referrer policy.');
