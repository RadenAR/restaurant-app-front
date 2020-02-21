'use strict'

// const store = require('../store')

const onCreateSuccess = response => {
  $('#message').text(`${response.restaurant.name} successfully added!`)
  console.log(response)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
const onCreateFailure = response => {
  $('#message').text('Creation Failure')
  $('#sign-up').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure
}
