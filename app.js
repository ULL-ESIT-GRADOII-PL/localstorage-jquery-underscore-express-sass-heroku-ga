//Server para Heroku
var express = require('express');
var app = express();

var _ = require('underscore');
app.register('.html', {
  compile: function (str, options) {
    var template = _.template(str);
    return function (locals) {
      return template(locals);
    };
  }
});
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/assets'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index');
  });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  });
