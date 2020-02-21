'use strict'

const authEvents = require('./auth/events')
const restaurantEvents = require('./restaurants/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').hide()
  $('#sign-out').hide()

  // restaurant events
  $('#new-restaurant').on('submit', restaurantEvents.onCreate)
  $('#new-restaurant').hide()
  $('#index').on('submit', restaurantEvents.onIndex)
  $('#index').hide()
  $('.content').hide()
  $('#clear-restaurants').on('click', restaurantEvents.onClear)
  $('#clear-restaurants').hide()
  $('.content').on('click', '.remove-restaurant', restaurantEvents.onDelete)
})
