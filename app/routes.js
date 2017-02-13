var express = require('express')
var router = express.Router()
var config = require('./config.js')


router.use(function (req, res, next) {
  res.locals.sprintName = config.sprintName
  res.locals.sprintLink = config.sprintLink
  res.locals.personName = config.personName
  res.locals.businessType = config.businessType
  next()
})


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router


 router.get('*', function (req, res, next) {
    if (req.query['next-page']) {
        res.redirect(req.query['next-page']);
    } else {
        next();
    }
});



