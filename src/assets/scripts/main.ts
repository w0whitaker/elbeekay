const testUrl = "/foo/bar/baz/blah.md";

const testArr = testUrl.split("/");

function getFileName(url: string): string {
    const arr = url.split("/");
    const newStr = arr.slice(-2).join("/");
    return `/${newStr}`;
}

console.log(testArr);
console.log(testArr.pop());
console.log(getFileName(testUrl));