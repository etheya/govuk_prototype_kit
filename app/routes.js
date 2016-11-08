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

// router.get('/sprint27/pre-application/activities', function (req, res) {
//     var activities = req.query.activities;
//     if (activities === '0') {
//         res.redirect('/sprint27/pre-application/check-your-answers');
//     } else if (activities === '1') {
//         res.redirect('/sprint27/pre-application/check-your-answers');
//     } else if (activities === '2') {
//         res.redirect('/sprint27/pre-application/check-your-answers');
//     } else if (activities === '3') {
//         res.redirect('/sprint27/pre-application/check-your-answers');
//     } else if (activities === '4') {
//         res.redirect('/sprint27/pre-application/check-your-answers');
//     } else if (activities === '5') {
//         res.redirect('/sprint27/pre-application/check-your-answers');
//     } else if (activities === '6') {
//         res.redirect('/sprint27/pre-application/check-your-answers');
//     } else {
//         res.render('/sprint27/pre-application/check-your-answers')
//     }


// })



// router.get('*', function (req, res, next) {
//       if (req.query['next-page']) {
//         res.redirect(name + '/' + req.query['next-page']);
//       } else {
//         next();
//       }
//     });


// About the business
router.get('/sprint27/about-the-business/vat', function (req, res) {
    var registered = req.query.registered;
    if (registered === 'false') {
        res.redirect('/sprint27/about-the-business/activities');
    } else {
        res.render('sprint27/about-the-business/vat')
    }
})

router.get('/sprint27/about-the-business/contacting-you', function (req, res) {
    var registered = req.query.registered;
    if (registered === 'false') {
        res.redirect('/sprint27/about-the-business/new-registered-office');
    } else {
        res.render('sprint27/about-the-business/contacting-you')
    }
})

router.get('/sprint27/about-the-business/check-your-answers', function (req, res) {
    var address = req.query.address;
    if (address === 'false') {
        res.redirect('/sprint27/about-the-business/address-for-letters');
    } else {
        res.render('sprint27/about-the-business/check-your-answers')
    }
})


