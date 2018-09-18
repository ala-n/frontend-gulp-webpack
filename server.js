const express = require('express');
const app = express();
const exphbs = require('express-hbs');

app.engine('.html', exphbs.express4({
    partialsDir: __dirname + '/src/components/bundles/',
}));

app.set('views', __dirname);
app.set('view engine', 'html');
app.use(require('connect-livereload')());
app.use(express.static('dest'));

app.get('/', function (req, res) {
    let page = {
        name: 'Post'
    };
    exphbs.registerHelper('page', function(name) {
        return name;
    });
    res.render('index');
});

app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});