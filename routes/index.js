var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Timestamp API' });
});

router.get('/:time',function(req,res) {

  var unixToNatural = function(unix) {
    var date = new Date(unix * 1000);
    var monthNames = ["January", "February", "March",       "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var naturalDate = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    return naturalDate;
  }
  var input = req.params.time;
  //
  if (!isNaN(input)) {
    var unix = input;
    var naturalDate = unixToNatural(unix);
    var data = {unix:input, natural:naturalDate};
    res.send(data);
  } else {
    console.log(input);
    var date = new Date(input);
    if(!isNaN(date)) {
      var data =  {unix:date/1000, natural:input};
      res.send(data);
    } else {
      var data = {unix:null,natural:null};
      res.send(data);
    }
  }
});

module.exports = router;
