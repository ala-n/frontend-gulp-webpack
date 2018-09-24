const url = require('url');
const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();
const exphbs = require('express-hbs');
const paths = require('./paths-hbs');
const pathsArray = paths.pathsArray;

const viewpath = path.join(__dirname, '/test-pages/pages/');

app.engine('.html', exphbs.express4({
    layoutsDir: __dirname,
    partialsDir: pathsArray,
}));

app.set('views', viewpath);
app.set('view engine', 'html');

app.use(express.static('dest'));

function renderFile(res, pathfile) {
    res.render(pathfile.replace(/\.html$/i, '').replace(/^(\/|\\)/i, ''));
}

function renderDir(res, pathdir, fspath) {
    const filenames = fs.readdirSync(fspath);
    const links =  filenames.map((fn) => ({
        name: fn,
        link: path.join(pathdir, fn)
    }));
    res.render('__renderdir', {
        links
    });
}

// TODO: resolver
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
    const fspath = path.join(viewpath, pathname);
    const stat = fs.lstatSync(fspath);
    if (stat.isDirectory()) {
        renderDir(res, pathname, fspath);
        return;
    }
    if (stat.isFile()) {
        renderFile(res, pathname);
        return;
    }
    next();

    //res.render('main-page');
});
// app.get('/main', function (req, res) {
//     res.render('main-page');
// });
// app.get('/test', function (req, res) {
//     res.render('test');
// });
app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});