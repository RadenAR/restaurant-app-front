'use strict'

const authEvents = require('./auth/events')
const restaurantEvents = require('./restaurants/events')
const reservationEvents = require('./reservations/events')

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
  $('.content').on('click', '.update-restaurant', restaurantEvents.showUpdate)
  $('#update').hide()
  $('#update').on('submit', restaurantEvents.onUpdate)

  // reservation events
  $('#index-reso').hide()
  $('#index-reso').on('submit', reservationEvents.onIndexReso)
  $('#clear-reso').hide()
  $('#new-reso').hide()

  $('#new-reso').on('submit', reservationEvents.onCreateReso)

  $('#clear-reso').on('click', reservationEvents.onClearReso)

  $('.reso-content').on('click', '.remove-reso', reservationEvents.onDeleteReso)

  $('.content').on('click', '.make-reso', reservationEvents.onMakeReso)
})
