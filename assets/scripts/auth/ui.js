'use strict'

const store = require('../store')

const onSignUpSuccess = response => {
  $('#message').text(`${response.user.email} successfully signed up`)
  $('#sign-up').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
const onSignUpFailure = response => {
  $('#message').text('Sign up failed')
  $('#sign-up').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
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
}

const onSignInFailure = response => {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onChangeSuccess = () => {
  $('#message').text(`Successfully changed password`)
  $('#change-pw').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const onChangeFailure = () => {
  $('#message').text('Change password failed')
  $('#change-pw').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
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
}

const onSignOutFailure = () => {
  $('#message').text('Sign Out failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
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
