const express = require('express');
const app = express();
const exphbs = require('express-hbs');
const paths = require('./paths-hbs');
const pathsArray = paths.pathsArray;

app.engine('.html', exphbs.express4({
    layoutsDir: __dirname,
    partialsDir: pathsArray,
}));

app.set('views', __dirname + '/test-pages/pages/');
app.set('view engine', 'html');
app.use(require('connect-livereload')());
app.use(express.static('test-pages'));

app.get('/', function (req, res) {
    res.render('main-page');
});
app.get('/main', function (req, res) {
    res.render('main-page');
});
app.get('/test', function (req, res) {
    res.render('test');
});
app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});