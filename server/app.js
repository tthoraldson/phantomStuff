// DREW GETS TO BUY THERESA OLIVES :)
var express = require('express');
var app = express();
var phantom = require('phantom');
var path = require('path');
var bodyParser = require('body-parser');

/** ---------- ROUTES ----------- **/
var index = require('./routes/index');

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/', index);

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('SEE TO BELIEVE ON localhost:', app.get('port'));
});

/*
 ___ _  _   _   _  _ _____ ___  __  __     _ ___
| _ \ || | /_\ | \| |_   _/ _ \|  \/  | _ | / __|
|  _/ __ |/ _ \| .` | | || (_) | |\/| || || \__ \
|_| |_||_/_/ \_\_|\_| |_| \___/|_|  |_(_)__/|___/
*/
// https://github.com/users/tthoraldson/contributions

function getDate(){
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;

  if (day.toString().length < 2) {
    day = '0' + day;
  }

  if (month.toString().length < 2) {
    month = '0' + month;
  }

  var date = d.getFullYear() + '-' + month + '-' + day;
  return date;
}

var swagArray = [];
var sitepage = null;
var phInstance = null;
// phantom.create()
//     .then(instance => {
//         phInstance = instance;
//         return instance.createPage();
//     })
//     .then(page => {
//         sitepage = page;
//         return page.open('https://github.com/users/tthoraldson/contributions');
//     })
//     .then(status => {
//         console.log(status);
//         // sitepage.evaluate(function(){
//         //   console.log('page eval started');
//         //   var x = document.getElementsByClassName("example");
//         //   console.log(x);
//         // });
//         return sitepage.property('content');
//     })
//     .then(content => {
//         swagArray = content.split('\n');
//         swagArray.forEach(function(line){
//
//         });
//         console.log(swagArray[1]);
//         sitepage.close();
//         phInstance.exit();
//     })
//     .catch(error => {
//         console.log(error);
//         phInstance.exit();
//     });


page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};
page.open('https://github.com/users/tthoraldson/contributions', function(status) {
  page.evaluate(function() {
    console.log(document.title);
  });
  phantom.exit();
});
