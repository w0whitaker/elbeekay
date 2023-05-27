/** @format */
import glob from 'glob';

const testUrl = '/foo/bar/baz/blah.md';

const testGlob = await glob('public/images/**/*');

function getFileName(url) {
  const arr = url.split('/');
  const newStr = arr.slice(-2).join('/');
  return `/${newStr}`;
}

console.log(getFileName(testUrl));
console.log(typeof testGlob);
