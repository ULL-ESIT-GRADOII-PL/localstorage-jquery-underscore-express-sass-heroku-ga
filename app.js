//Server para Heroku
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/minified'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('minified/index');
  });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  });
