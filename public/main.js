/** @format */
const testUrl = '/foo/bar/har/jar/mar/baz/blah.md';

// const testGlob = await glob('public/images/**/*');

function getFileName(url) {
  const arr = url.split('/');

  function sanitize(str) {
    // if str includes 'bar' return characters after 'bar'
    if (str.includes('bar')) {
      const index = str.indexOf('bar');
      return str.slice(index).join('/');
    } else {
      // else return the string
      return str.slice(-2).join('/');
    }
  }

  const newStr = sanitize(arr);

  return `/${newStr}`;
}

console.log(getFileName(testUrl));
// console.log(typeof testGlob);
