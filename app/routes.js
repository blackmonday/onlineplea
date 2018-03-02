var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// **************
// Find your case
router.post('/map/find-your-case', function (req, res) {

    res.redirect('/map/your-details')
    
})

// ***********
// You details
router.post('/map/your-details', function (req, res) {

    res.redirect('/map/your-plea')
    
})

// ***********
// Your plea
router.post('/map/your-plea', function (req, res) {

  var plea = req.session.data['how-do-you-plead-group']

  if (plea == "Guilty"){
    res.redirect('/map/guilty-plea')
  } else if (plea == "Not guilty"){
    res.redirect('/map/not-guilty-plea')
  } else {
      res.redirect('/map/your-plea')
  }
    
})

// ***********
// Guilty plea
router.post('/map/guilty-plea', function (req, res) {

  var plea = req.session.data['do-you-want-to-come-to-court-group']

  if (plea == "Yes"){
    res.redirect('/map/your-court-hearing')
  } else if (plea == "No"){
    res.redirect('/map/your-finances')
  } else {
      res.redirect('/map/guilty-plea')
  }
    
})

// ******************
// Your court hearing
router.post('/map/your-court-hearing', function (req, res) {

  var plea = req.session.data['interpreter-group']

  if (plea == "Yes"){
    res.redirect('/map/your-finances')
  } else if (plea == "No"){
    res.redirect('/map/your-finances')
  } else {
      res.redirect('/map/your-court-hearing')
  }
    
})

// ***************
// Not guilty plea
router.post('/map/not-guilty-plea', function (req, res) {

    res.redirect('/map/your-finances')
    
})

// *************
// Your finances
router.post('/map/your-finances', function (req, res) {

    res.redirect('/map/your-income')
    
})

// *************
// Your income
router.post('/map/your-income', function (req, res) {

  var employment_status = req.session.data['employment-status-group']
  var claiming_benefits = req.session.data['claiming-benefits-group']

  if ((employment_status == "Employed") || (employment_status == "Self-employed")){
    res.redirect('/map/deductions-from-earnings')
  } else if (claiming_benefits == "Yes"){
    res.redirect('/map/your-benefits')
  } else {
      res.redirect('/map/your-monthly-outgoings')
  }
    
    
})

// ************************
// Deductions from earnings
router.post('/map/deductions-from-earnings', function (req, res) {

  var deductions = req.session.data['deductions-from-earnings-group']

  if (deductions == "Yes"){
    res.redirect('/map/your-employment')
  } else if (deductions == "No"){
    res.redirect('/map/your-monthly-outgoings')
  } else {
      res.redirect('/map/deductions-from-earnings')
  }
        
})

// ***************
// Your employment
router.post('/map/your-employment', function (req, res) {

    res.redirect('/map/your-monthly-outgoings')
    
})


// **********************
// Your monthly outgoings
router.post('/map/your-monthly-outgoings', function (req, res) {

  var outgoings = req.session.data['outgoings-group']

  if (outgoings == "Yes"){
    res.redirect('/map/your-monthly-outgoings-detail')
  } else if (outgoings == "No"){
    res.redirect('/map/check-your-answers')
  } else {
      res.redirect('/map/your-monthly-outgoings')
  }
        
    
})

// *******************************
// Your monthly outgoings - detail
router.post('/map/your-monthly-outgoings-detail', function (req, res) {

  res.redirect('/map/check-your-answers')    
    
})


// *************
// Your benefits
router.post('/map/your-benefits', function (req, res) {

  res.redirect('/map/your-monthly-outgoings')    
    
})


// ******************
// Check your answers
router.post('/map/check-your-answers', function (req, res) {

  res.redirect('/map/declaration')    
    
})


// ***********
// Declaration
router.post('/map/declaration', function (req, res) {

  res.redirect('/map/confirmation')    
    
})


// ************
// Confirmation
router.post('/map/confirmation', function (req, res) {

  res.redirect('/map/give-feedback')    
    
})

// *************
// Give feedback
router.post('/map/give-feedback', function (req, res) {

  res.redirect('/map/feedback-confirmation')    
    
})

// *********************
// Feedback confirmation
router.post('/map/feedback-confirmation', function (req, res) {

  res.redirect('/map/start-page')    
    
})

