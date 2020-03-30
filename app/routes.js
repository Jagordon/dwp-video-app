const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/full-name-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var fullName = req.session.data['fullName']

// Check whether the variable matches a condition
  if (fullName == "Noel Name"){
  res.redirect('/citizen/join-name-confirm-fail')
  }
  else if (fullName == ""){
    // Send user to next page
    res.redirect('/citizen/join-name-error')
  }
  else {
    // Send user to ineligible page
    res.redirect('/citizen/join-name-confirm')
  }
})


router.post('/security-code-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var securityCode = req.session.data['security-code']


// Check whether the variable matches a condition
  if (securityCode == "apple"){
    // Send user to next page
    res.redirect('/citizen/passcode/join-password-confirm')
  }
  else if (securityCode == ""){
    // Send user to ineligible page
    res.redirect('/citizen/passcode/join-password-error')
  }
  else {
    // Send user to ineligible page
    res.redirect('/citizen/passcode/join-password-confirm-fail')
  }

})

router.post('/appt-time', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var myInput = req.session.data['myInput']

// Check whether the variable matches a condition
if (myInput == ""){
    // Send user to next page
    res.redirect('#')
  }
  else {
    // Send user to ineligible page
    res.redirect('/staff/create-appointment/confirm-video-details')
  }
})

//**Blank appointment code **//

// Add your routes here - above the module.exports line
router.post('/appointment-code-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var appointmentCode = req.session.data['appointmentCode']



// Check whether the variable matches a condition
  if (appointmentCode == ""){
    // Send user to next page
    res.redirect('staff/join-appointment/code-error')
  }
  else {
    // Send user to ineligible page
    res.redirect('staff/join-appointment/confirm')
  }

})
module.exports = router

module.exports = router
