//Server para Heroku
var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/'));

app.set('views', path.join( __dirname,'/views'));
app.set('view engine', 'jade');


app.get('/', function (req, res) {
  res.render('index');
  });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  });
