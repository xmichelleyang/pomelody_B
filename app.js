/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
// var bodyParser = require('body-parser');

var index = require('./routes/index');
var data = require('./routes/data');
var render = require('./routes/render');
var saveJSON = require('./routes/saveJSON');




// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', index.view);
// Example route
app.get('/', render.viewLogin);
app.get('/welcome', render.viewWelcome);
app.get('/instructions', render.viewInstructions);
app.get('/help-screen',render.viewHelpScreen);
app.get('/prev-settings', render.viewPrevSettings);
app.get('/select-productivity', render.viewSelectProd);
app.get('/select-productivity_A', render.viewSelectProd);
app.get('/select-productivity_B', render.viewSelectProd_B);
app.get('/select-interval-of-time-prod', render.viewSelectIntervalProd);
app.get('/select-relaxation', render.viewSelectRelax);
app.get('/select-interval-of-time-relax', render.viewSelectIntervalRelax);
app.get('/select-interval-of-time', render.viewSelectInterval);
app.get('/you-can-do-it', render.viewYouCan);
app.get('/treat-yourself', render.viewTreatYourself);
app.get('/end', render.viewEnd);
app.get('/data', data.dataInfo);
app.post('/saveJSON', saveJSON.saveJSON);
app.get('/spotifyLogin', render.getSpotifyToken);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
