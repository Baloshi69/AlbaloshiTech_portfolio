const fs = require("fs");
const { parse } = require("node-html-parser");
const html = fs.readFileSync("clearshowings.html","utf8");
const root = parse(html);
const text = root.structuredText;
console.log(text);
