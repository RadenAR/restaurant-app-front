'use strict'

const store = require('../store')

const onSignUpSuccess = response => {
  $('#message').text(`${response.user.email} successfully signed up`)
  $('#sign-up').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}
const onSignUpFailure = response => {
  $('#message').text('Sign up failed')
  $('#sign-up').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onSignInSuccess = response => {
  $('#message').text(`${response.user.email} successfully signed in!`)
  $('#sign-in').trigger('reset')
  store.user = response.user

  $('#message').removeClass('failure')
  $('#message').addClass('success')

  $('#sign-out').show()
  $('#change-pw').show()
  $('#sign-in').hide()

  $('#new-restaurant').show()
  $('#index').show()

  $('#sign-up').hide()

  $('#index-reso').show()

  $('#new-reso').show()
  $('#newrest').show()
  clearMessage()

  $('.picture').show()
}

const onSignInFailure = response => {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onChangeSuccess = () => {
  $('#message').text(`Successfully changed password`)
  $('#change-pw').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onChangeFailure = () => {
  $('#message').text('Change password failed')
  $('#change-pw').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onSignOutSuccess = () => {
  $('#message').text(`Successfully Signed Out`)
  $('#change-pw').trigger('reset')
  store.user = null

  $('#message').removeClass('failure')
  $('#message').addClass('success')

  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-pw').hide()

  $('#new-restaurant').hide()
  $('#index').hide()
  $('.content').hide()
  $('#clear-restaurants').hide()

  $('#sign-up').show()

  $('#new-restaurant').trigger('reset')
  $('#update').trigger('reset')

  $('#index-reso').hide()
  $('#clear-reso').hide()

  $('#new-reso').hide()
  $('#newrest').hide()
  clearMessage()

  $('.picture').hide()
}

const onSignOutFailure = () => {
  $('#message').text('Sign Out failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const clearMessage = () => {
  setTimeout(function () {
    $('#message').text('')
    $('#message').removeClass('failure')
    $('#message').removeClass('success')
  }, 5000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure,
  onSignOutSuccess,
  onSignOutFailure
}
