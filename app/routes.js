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
    var casePostcode = req.session.data['case-post-code']

    /* Transport for London */
    if ((URN == "TFL") || (URN == "tfl") || (URN == "TfL") || (URN == "21NT5181416")) {
        req.session.data['prosecutor'] = "Transport for London"
        
        req.session.data['defendant-first-name'] = "Sam"
        req.session.data['defendant-last-name'] = "Smith"
        req.session.data['defendant-address-line-1'] = "38A Baker Street"
        req.session.data['defendant-address-city'] = "London"
        req.session.data['defendant-address-postcode'] = "W1 7SX"
        
        req.session.data['new-defendant-first-name'] = req.session.data['defendant-first-name']
        req.session.data['new-defendant-last-name'] = req.session.data['defendant-last-name']
        req.session.data['new-defendant-address-line-1'] = req.session.data['defendant-address-line-1']
        req.session.data['new-defendant-address-city'] = req.session.data['defendant-address-city']
        req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']

        req.session.data['dob-day'] = ""
        req.session.data['dob-month'] = ""
        req.session.data['dob-year'] = ""
        
        req.session.data['nin'] = ""

        req.session.data['charge-title'] = "You have 1 charge"
        req.session.data['charge-detail'] = "On 19/01/2016 At wandsworth bridge rd SW6 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares did use in relation to the journey you were taking a ticket which had been issued for use by another person on terms that it is not transferable."
        req.session.data['charge-detail-2'] = "Contrary to byelaw 18(1) and 24 of the Railway Byelaws made under Section 219 of the Transport Act 2000 by the Strategic Railway Authority and confirmed under schedule 20 of the Transport Act 2000."
        req.session.data['charge-detail-3'] = ""
        req.session.data['charge-detail-4'] = ""
        req.session.data['charge-detail-5'] = ""
        
        
    /* TV Licensing */
    } else if ((URN == "TVL") || (URN == "tvl") || (URN == "506123456C")) {
        req.session.data['prosecutor'] = "TV Licensing"
        
        req.session.data['defendant-first-name'] = "Sam"
        req.session.data['defendant-last-name'] = "Smith"
        req.session.data['defendant-address-line-1'] = "38A Baker Street"
        req.session.data['defendant-address-city'] = "London"
        req.session.data['defendant-address-postcode'] = "W1 7SX"

        req.session.data['new-defendant-first-name'] = req.session.data['defendant-first-name']
        req.session.data['new-defendant-last-name'] = req.session.data['defendant-last-name']
        req.session.data['new-defendant-address-line-1'] = req.session.data['defendant-address-line-1']
        req.session.data['new-defendant-address-city'] = req.session.data['defendant-address-city']
        req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']

        req.session.data['dob-day'] = "1"
        req.session.data['dob-month'] = "1"
        req.session.data['dob-year'] = "1981"

        req.session.data['nin'] = ""

        req.session.data['charge-title'] = "Unlicensed use of a TV Receiver"
        req.session.data['charge-detail'] = "That on 30/05/2018 at the above address you were found to have been using colour TV receiving equipment to watch or record live TV programmes at that address for an unspecified period without an appropriate licence, last using it on 30/05/2018."
        req.session.data['charge-detail-2'] = "A colour TV set was observed from the entrance door to the property to be in use at 20:25 on 30/05/2018, the programme being shown was an episode of EastEnders."
        req.session.data['charge-detail-3'] = "TV subscription package: Not stated"
        req.session.data['charge-detail-4'] = "Occupation:  Not stated"
        req.session.data['charge-detail-5'] = "Contrary to the Communications Act 2003 and Communications (Television Licensing) Regulations 2004."
       
        
    /* TV Licensing */        
    } else if ((URN == "123123123C")) {
        req.session.data['prosecutor'] = "TV Licensing"
        
        req.session.data['defendant-title'] = "Mr"
        req.session.data['defendant-first-name'] = "A"
        req.session.data['defendant-last-name'] = "Participant"
        req.session.data['defendant-address-line-1'] = "1 My Street"
        req.session.data['defendant-address-city'] = "London"
        req.session.data['defendant-address-postcode'] = "AN9 9YZ"

        req.session.data['new-defendant-first-name'] = req.session.data['defendant-first-name']
        req.session.data['new-defendant-last-name'] = req.session.data['defendant-last-name']
        req.session.data['new-defendant-address-line-1'] = req.session.data['defendant-address-line-1']
        req.session.data['new-defendant-address-city'] = req.session.data['defendant-address-city']
        req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']

        req.session.data['dob-day'] = "1"
        req.session.data['dob-month'] = "1"
        req.session.data['dob-year'] = "1981"

        req.session.data['nin'] = ""

        req.session.data['charge-title'] = "Unlicensed use of a TV Receiver"
        req.session.data['charge-detail'] = "That on 30/05/2018 at the above address you were found to have been using colour TV receiving equipment to watch or record live TV programmes at that address for an unspecified period without an appropriate licence, last using it on 30/05/2018."
        req.session.data['charge-detail-2'] = "A colour TV set was observed from the entrance door to the property to be in use at 20:25 on 30/05/2018, the programme being shown was an episode of EastEnders."
        req.session.data['charge-detail-3'] = "TV subscription package: Not stated"
        req.session.data['charge-detail-4'] = "Occupation:  Not stated"
        req.session.data['charge-detail-5'] = "Contrary to the Communications Act 2003 and Communications (Television Licensing) Regulations 2004."

        
        
    /* DVLA */
    } else if ((URN == "DVLA") || (URN == "dvla") || (URN == "29KWN02ZRR")) {
        req.session.data['prosecutor'] = "DVLA"
        
        req.session.data['defendant-first-name'] = "Sam"
        req.session.data['defendant-last-name'] = "Smith"
        req.session.data['defendant-address-line-1'] = "38A Baker Street"
        req.session.data['defendant-address-city'] = "London"
        req.session.data['defendant-address-postcode'] = "W1 7SX"

        req.session.data['new-defendant-first-name'] = req.session.data['defendant-first-name']
        req.session.data['new-defendant-last-name'] = req.session.data['defendant-last-name']
        req.session.data['new-defendant-address-line-1'] = req.session.data['defendant-address-line-1']
        req.session.data['new-defendant-address-city'] = req.session.data['defendant-address-city']
        req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']

        req.session.data['new-defendant-first-name'] = req.session.data['defendant-first-name']
        req.session.data['new-defendant-last-name'] = req.session.data['defendant-last-name']
        req.session.data['new-defendant-address-line-1'] = req.session.data['defendant-address-line-1']
        req.session.data['new-defendant-address-city'] = req.session.data['defendant-address-city']
        req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']

        req.session.data['dob-day'] = "1"
        req.session.data['dob-month'] = "1"
        req.session.data['dob-year'] = "1981"

        req.session.data['nin'] = ""

        req.session.data['charge-title'] = "Unlicensed keeping of motor vehicle"
        req.session.data['charge-detail'] = "At 12:00 on 21 April 2018, failed to comply with a declaration or statement made under the Road Vehicles (Statutory Off-Road Notification) Regulations, in that you kept a Green Ford Focus registration mark WN02 ZRR on George Street, Croydon. The previous licence expired on 01/01/2018. The annual rate of duty applicable is £250."
        req.session.data['charge-detail-2'] = "Charge Authorised by: Rohan Gye"
        req.session.data['charge-detail-3'] = "Contrary to section 29(1) and (3A) of the Vehicle Excise and Registration Act 1994."
        req.session.data['charge-detail-4'] = ""
        req.session.data['charge-detail-5'] = ""

        
        
    } else {
        req.session.data['defendant-first-name'] = "Sam"
        req.session.data['defendant-last-name'] = "Smith"
        req.session.data['defendant-address-line-1'] = "38A Baker Street"
        req.session.data['defendant-address-city'] = "London"
        req.session.data['defendant-address-postcode'] = "W1 7SX"

        req.session.data['new-defendant-first-name'] = req.session.data['defendant-first-name']
        req.session.data['new-defendant-last-name'] = req.session.data['defendant-last-name']
        req.session.data['new-defendant-address-line-1'] = req.session.data['defendant-address-line-1']
        req.session.data['new-defendant-address-city'] = req.session.data['defendant-address-city']
        req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']

        req.session.data['dob-day'] = ""
        req.session.data['dob-month'] = ""
        req.session.data['dob-year'] = ""

        req.session.data['nin'] = ""

        req.session.data['charge-title'] = "Generic charge title"
        req.session.data['charge-detail'] = "Generic charge detail ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        req.session.data['charge-detail-2'] = ""
        req.session.data['charge-detail-3'] = ""
        req.session.data['charge-detail-4'] = ""
        req.session.data['charge-detail-5'] = ""

    
    
    }
    
    /* WELSH OR ENGLISH? */
    if ((casePostcode == "LL48 6ER") || (casePostcode == "LL486ER")) {
        req.session.data['defendant-address-line-2'] = "Portmeirion"
        req.session.data['defendant-address-city'] = "Penrhyndeudraeth"
        req.session.data['defendant-address-postcode'] = "LL48 6ER"

        req.session.data['new-defendant-address-line-2'] = "Portmeirion"
        req.session.data['new-defendant-address-city'] = "Penrhyndeudraeth"
        req.session.data['new-defendant-address-postcode'] = "LL48 6ER"
    }

    if ((casePostcode == "AN9 9YZ") || (casePostcode == "AN99YZ")) {
        req.session.data['defendant-address-line-2'] = ""
        req.session.data['defendant-address-city'] = "London"
        req.session.data['defendant-address-postcode'] = "AN9 9YZ"
        
        req.session.data['new-defendant-address-line-2'] = ""
        req.session.data['new-defendant-address-city'] = "London"
        req.session.data['new-defendant-address-postcode'] = "AN9 9YZ"
    }

    req.session.data['returnToCYA'] = "No"
    
    //res.redirect('/map/your-details')
        
    if ((URN == "TFL") || (URN == "tfl") || (URN == "TfL") || (URN == "21NT5181416") || (URN == "TVL") || (URN == "506123456C") || (URN == "tvl") || (URN == "123123123C") || (URN == "DVLA") || (URN == "dvla") || (URN == "29KWN02ZRR")) {
        res.redirect('/map/your-details')
    } else {
        res.redirect('/map/find-your-case')
    }
    
})

// ***********
// You details
router.post('/map/your-details', function (req, res) {
    
    var areTheseDetailsCorrect = req.session.data['name-address-group'];
    if (areTheseDetailsCorrect == "Yes") {
        res.redirect('/map/your-details-3')
    } else if (areTheseDetailsCorrect == "No") {
        res.redirect('/map/your-details-2')
    }
    
})

// *************
// You details 2
router.post('/map/your-details-2', function (req, res) {
    
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
        
    res.redirect('/map/your-details-3')
    
})

// *************
// You details 3
router.post('/map/your-details-3', function (req, res) {
            
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

    res.redirect('/map/not-guilty-plea-2')
    
})

// ***************
// Not guilty plea 2
router.post('/map/not-guilty-plea-2', function (req, res) {

    res.redirect('/map/not-guilty-plea-3')
    
})

// ***************
// Not guilty plea 3
router.post('/map/not-guilty-plea-3', function (req, res) {

    res.redirect('/map/not-guilty-plea-4')
    
})

// ***************
// Not guilty plea 4
router.post('/map/not-guilty-plea-4', function (req, res) {

    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {   
        if (req.session.data['URN'] == "TVL2") {
            res.redirect('/map/company-finances')
        } else {
            res.redirect('/map/your-finances')
        }
    }
    
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

    if (claiming_benefits == "Yes") {
        res.redirect('/map/your-benefits')
    } else if ((employment_status == "Employed") || (employment_status == "Self-employed")) {
        res.redirect('/map/deductions-from-earnings')

    } else {

        if (req.session.data['returnToCYA'] == "Yes") {
            res.redirect('check-your-answers')
        } else if (req.session.data['returnToCYA'] == "No") {
            res.redirect('/map/your-monthly-outgoings')
        }
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

    var employment_status = req.session.data['employment-status-group']
    
    if ((employment_status == "Employed") || (employment_status == "Self-employed")) {
        res.redirect('/map/deductions-from-earnings')
    } else {
        if (req.session.data['returnToCYA'] == "Yes") {
            res.redirect('check-your-answers')
        } else if (req.session.data['returnToCYA'] == "No") {
            res.redirect('/map/your-monthly-outgoings')
        }
    }
    
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