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


// Business matching branching
router.get('/sprint27/business-structure', function (req, res) {
    var structure = req.query.structure;
    if (structure === 'bd') {
        res.redirect('/sprint27/business-details');
    } else if (structure === 'bst') {
        res.redirect('/sprint27/business-details-st');
    } else if (structure === 'bdp'){
        res.redirect('/sprint27/business-details-partner');
    } else if (structure === 'bdlp'){
        res.redirect('/sprint27/business-details-limited-partner');
    } else {
        res.render('sprint27/business-structure')
    }

})

// Pre application structure
router.get('/sprint27/pre-application/structure', function (req, res) {
    var structure = req.query.structure;
    if (structure === 'regno') {
        res.redirect('/sprint27/pre-application/registration-number');
    } else if (structure === 'activities') {
        res.redirect('/sprint27/pre-application/activities');
    } else if (structure === 'type'){
        res.redirect('/sprint27/pre-application/business-type');
    } else {
        res.render('sprint27/pre-application/structure')
    }

})

// Activites
// router.get('/sprint27/pre-application/activities', function (req, res) {
//     var activities = req.query.activities;
//     if (activities === '0') {
//         res.redirect('/sprint27/pre-application/check-your-answers');
//     } else {
//         res.render('sprint27/pre-application/check-your-answers')
//     }

// })



// router.get('*', function (req, res, next) {
//       if (req.query['next-page']) {
//         res.redirect(name + '/' + req.query['next-page']);
//       } else {
//         next();
//       }
//     });