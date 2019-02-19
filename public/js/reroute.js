var express = require('express');
var reroute = express();

function toHome() {
  reroute.get('./views/welcome');
}
