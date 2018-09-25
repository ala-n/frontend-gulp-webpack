const url = require('url');
const path = require('path');
const fs = require('fs');

const express = require('express');
const exphbs = require('express-hbs');
const pathshbs = require('./paths/paths-hbs');

const app = express();
const pathsArray = pathshbs.pathsArray;

const viewPath = path.join(__dirname, '/test-pages/pages/');

app.engine('.html', exphbs.express4({
    layoutsDir: __dirname,
    partialsDir: pathsArray,
}));

app.set('views', viewPath);
app.set('view engine', 'html');

app.use(express.static('dest'));

function renderFile(res, pathFile) {
    res.render(pathFile.replace(/\.html$/i, '').replace(/^(\/|\\)/i, ''));
}

function renderDir(res, pathDir, fsPath) {
    const fileNames = fs.readdirSync(fsPath);
    const links =  fileNames.map((fn) => ({
        name: fn,
        link: path.join(pathDir, fn)
    }));
    res.render('__renderdir', {
        links
    });
}

app.get('/*', function (req, res, next) {
    const pathname = url.parse(req.url).pathname;

    if (/\.(js|css)$/.test(pathname)) {
        next();
        return;
    }
    if (/\.(html)$/.test(pathname)) {
        renderFile(res, pathname);
        return;
    }
    const fsPath = path.join(viewPath, pathname);
    const stat = fs.lstatSync(fsPath);
    if (stat.isDirectory()) {
        renderDir(res, pathname, fsPath);
        return;
    }
    if (stat.isFile()) {
        renderFile(res, pathname);
        return;
    }
    next();
});
app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});