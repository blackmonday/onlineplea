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
    
    var URN = req.session.data['URN']

    /* CITIZEN */
    if ((URN == "TFL") || (URN == "tfl") || (URN == "TfL")) {
        req.session.data['defendant-first-name'] = "Sam"
        req.session.data['defendant-last-name'] = "Smith"
        req.session.data['defendant-address-line-1'] = "38A Baker Street"
        req.session.data['defendant-address-city'] = "London"
        req.session.data['defendant-address-postcode'] = "W1 7SX"

        req.session.data['charge-title'] = "Passenger failing to produce a ticket"
        req.session.data['charge-detail'] = "On 17 Feb 2017 At Mill Mead Road N17. Being a passenger on a Public service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not as directed by the Driver an Inspector or a Notice displayed on the vehicle pay the fare for the journey in accordance with the direction. Contrary to byelaw 18(1) and 24 of the Railway Byelaws made under Section 219 of the Transport Act 2000 by the Strategic Railway Authority and confirmed under schedule 20 of the Transport Act 2000."
    /* CITIZEN */
    } else if (URN == "TVL") {
        req.session.data['defendant-first-name'] = "Sam"
        req.session.data['defendant-last-name'] = "Smith"
        req.session.data['defendant-address-line-1'] = "38A Baker Street"
        req.session.data['defendant-address-city'] = "London"
        req.session.data['defendant-address-postcode'] = "W1 7SX"

        req.session.data['charge-title'] = "Possess/control TV set with intent another use install without a licence"
        req.session.data['charge-detail'] = "On 01/11/2018 at Chelmsford in the county of Essex were in possession or control of a colour television receiver knowing, or having reasonable grounds for believing, that another person intended to install or use the receiver without a licence."
    /* COMPANY */
    } else if (URN == "TVL2") {
        req.session.data['company-name'] = "Acme Ltd"
        req.session.data['company-address-line-1'] = "123 High Street"
        req.session.data['company-address-city'] = "London"
        req.session.data['company-address-postcode'] = "N1 9XY"

        req.session.data['charge-title'] = "Possess/control TV set with intent another use install without a licence"
        req.session.data['charge-detail'] = "On 01/11/2018 at Chelmsford in the county of Essex were in possession or control of a colour television receiver knowing, or having reasonable grounds for believing, that another person intended to install or use the receiver without a licence."
    /* CITIZEN */
    } /*else {
        req.session.data['defendant-first-name'] = "Sam"
        req.session.data['defendant-last-name'] = "Smith"
        req.session.data['defendant-address-line-1'] = "38A Baker Street"
        req.session.data['defendant-address-city'] = "London"
        req.session.data['defendant-address-postcode'] = "W1 7SX"

        req.session.data['charge-title'] = "Generic charge title if TFL or TVL not specified as URN"
        req.session.data['charge-detail'] = "Generic charge detail if TFL or TVL not specified as URN"
    }*/
    
    
    req.session.data['returnToCYA'] = "No"
        
    if (URN == "TVL2") {
        res.redirect('/map/company-details')
    } else {
        res.redirect('/map/your-details')
    }
    
})






// ***********
// You details
router.post('/map/your-details', function (req, res) {
    
    var new_first_name = req.session.data['new-defendant-first-name']
    var new_last_name = req.session.data['new-defendant-last-name']
    var new_address_line_1 = req.session.data['new-defendant-address-line-1']
    var new_address_line_2 = req.session.data['new-defendant-address-line-2']
    var new_address_city = req.session.data['new-defendant-address-city']
    var new_address_county = req.session.data['new-defendant-address-county']
    var new_address_postcode = req.session.data['new-defendant-address-postcode']
    
    if (new_first_name != "") {
        req.session.data['defendant-first-name'] = new_first_name
    }
    if (new_last_name != "") {
        req.session.data['defendant-last-name'] = new_last_name
    }
    if (new_address_line_1 != "") {
        req.session.data['defendant-address-line-1'] = new_address_line_1
    }
    if (new_address_line_2 != "") {
        req.session.data['defendant-address-line-2'] = new_address_line_2
    }
    if (new_address_city != "") {
        req.session.data['defendant-address-city'] = new_address_city
    }
    if (new_address_county != "") {
        req.session.data['defendant-address-county'] = new_address_county
    }
    if (new_address_postcode != "") {
        req.session.data['defendant-address-postcode'] = new_address_postcode
    }
        
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-plea')
    }
    
})






// ***************
// Company details
router.post('/map/company-details', function (req, res) {
    
    var new_company_name = req.session.data['new-company-name']
    var new_company_address_line_1 = req.session.data['new-company-address-line-1']
    var new_company_address_line_2 = req.session.data['new-company-address-line-2']
    var new_company_address_city = req.session.data['new-company-address-city']
    var new_company_address_county = req.session.data['new-company-address-county']
    var new_company_address_postcode = req.session.data['new-company-address-postcode']
    
    if (new_company_name != "") {
        req.session.data['company-name'] = new_company_name
    }
    if (new_company_address_line_1 != "") {
        req.session.data['company-address-line-1'] = new_company_address_line_1
    }
    if (new_company_address_line_2 != "") {
        req.session.data['company-address-line-2'] = new_company_address_line_2
    }
    if (new_company_address_city != "") {
        req.session.data['company-address-city'] = new_company_address_city
    }
    if (new_company_address_county != "") {
        req.session.data['company-address-county'] = new_company_address_county
    }
    if (new_company_address_postcode != "") {
        req.session.data['company-address-postcode'] = new_company_address_postcode
    }
        
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-plea')
    }
    
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
      
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        
        
        
        if (req.session.data['URN'] == "TVL2") {
            res.redirect('/map/company-finances')
        } else {
            res.redirect('/map/your-finances')
        }
        
        
        
    }

    //res.redirect('/map/your-finances')
  } else {
      res.redirect('/map/guilty-plea')
  }
    
})

// ******************
// Your court hearing
router.post('/map/your-court-hearing', function (req, res) {

  var plea = req.session.data['interpreter-group']

  if (plea == "Yes"){
      
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        
        
        
        
        if (req.session.data['URN'] == "TVL2") {
            res.redirect('/map/company-finances')
        } else {
            res.redirect('/map/your-finances')
        }

        
        
        
        //res.redirect('/map/your-finances')
    }

    //res.redirect('/map/your-finances')
  } else if (plea == "No"){
      
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        
        
        
        
        if (req.session.data['URN'] == "TVL2") {
            res.redirect('/map/company-finances')
        } else {
            res.redirect('/map/your-finances')
        }

        
        
        
        //res.redirect('/map/your-finances')
    }

    //res.redirect('/map/your-finances')
  } else {
      res.redirect('/map/your-court-hearing')
  }
    
})

// ***************
// Not guilty plea
router.post('/map/not-guilty-plea', function (req, res) {

    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        
        
        
        
        if (req.session.data['URN'] == "TVL2") {
            res.redirect('/map/company-finances')
        } else {
            res.redirect('/map/your-finances')
        }

        
        
        
        //res.redirect('/map/your-finances')
    }

    //res.redirect('/map/your-finances')
    
})

// *************
// Your finances
router.post('/map/your-finances', function (req, res) {

    res.redirect('/map/your-income')
    
})

// ****************
// Company finances
router.post('/map/company-finances', function (req, res) {

    res.redirect('/map/company-income')
    
})

// ****************
// Company income
router.post('/map/company-income', function (req, res) {

    req.session.data['returnToCYA'] = "Yes"
    res.redirect('/map/check-your-answers')
    
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
      
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-monthly-outgoings')
    }

      //res.redirect('/map/your-monthly-outgoings')
  }  
    
})

// ************************
// Deductions from earnings
router.post('/map/deductions-from-earnings', function (req, res) {

  var deductions = req.session.data['deductions-from-earnings-group']

  if (deductions == "Yes"){
    res.redirect('/map/your-employment')
  } else if (deductions == "No"){
    
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-monthly-outgoings')
    }

      //res.redirect('/map/your-monthly-outgoings')
  } else {
      res.redirect('/map/deductions-from-earnings')
  }
        
})

// ***************
// Your employment
router.post('/map/your-employment', function (req, res) {

    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-monthly-outgoings')
    }

    //res.redirect('/map/your-monthly-outgoings')
    
})


// **********************
// Your monthly outgoings
router.post('/map/your-monthly-outgoings', function (req, res) {

    var outgoings = req.session.data['outgoings-group']

    if (outgoings == "Yes"){
        res.redirect('/map/your-monthly-outgoings-detail')
    } else if (outgoings == "No"){
        req.session.data['returnToCYA'] = "Yes"
        res.redirect('/map/check-your-answers')
    } else {
        res.redirect('/map/your-monthly-outgoings')
    }
          
})

// *******************************
// Your monthly outgoings - detail
router.post('/map/your-monthly-outgoings-detail', function (req, res) {
    
    var total = Number(req.session.data['accommodation']) + Number(req.session.data['council-tax']) + Number(req.session.data['household-bills']) + Number(req.session.data['travel-expense']) + Number(req.session.data['child-maintenance']) + Number(req.session.data['other-expenses-amount'])
    
    req.session.data['outgoings-total'] = parseFloat(total).toFixed(2)
    
    if (req.session.data['outgoings-total'] <= 0) {
        req.session.data['outgoings-total'] = "No details given"
    } else {
        req.session.data['outgoings-total'] = "£" + parseFloat(total).toFixed(2)
    }
    
    if (req.session.data['other-expenses-details'] != "") {
        req.session.data['other-expenses-details'] = 'including: ' + req.session.data['other-expenses-details']
    }
    
    req.session.data['returnToCYA'] = "Yes"

    res.redirect('/map/check-your-answers')    
    
})


// *************
// Your benefits
router.post('/map/your-benefits', function (req, res) {

    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-monthly-outgoings')
    }

    //res.redirect('/map/your-monthly-outgoings')    
    
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