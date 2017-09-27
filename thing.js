var marked = require("./marked2.js");
var fs = require('fs');
var argumentAliases = { 'file': 'f' };
var argv = require('minimist')(process.argv.slice(1), { alias: argumentAliases });
var path = require('path');
var temp = process.argv;
var topicFile = argv.file ? path.resolve(argv.file) : path.resolve(path.dirname(process.argv[1]), 'topic.md');
var htmlOut = "";
var style = 'position: relative;' +
    'display: inline-block;' +
    'padding: .4em .5em;' +
    'margin: 2px 2px 2px 0;' +
    'font-size: 11px;' +
    'line-height: 1;' +
    'white-space: nowrap;' +
    'text-decoration: none;' +
    'text-align: center;' +
    'border-width: 1px;' +
    'border-style: solid;' +
    'border-radius: 2em;' +
    'transition: all .15s ease-in-out;';
var func = fs.readFile(topicFile, 'utf8', (err, data) => {

    if (err) {
        return console.log(err);
    }
    htmlOut = `<html><head><style>.post-tag{${style}}</style></head><body>${marked.parse(data)}</body></html>`;
    fs.writeFile('message.html', htmlOut, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});




