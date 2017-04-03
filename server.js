var express = require('express');
// takes name of animationDuration

// create our app
var app = express();
// let's you add functionality to yoru application
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Express server is up on port 3000');
});
