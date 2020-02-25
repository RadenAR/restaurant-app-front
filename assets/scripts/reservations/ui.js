'use strict'

const showResoTemplate = require('../templates/reservation-listing.handlebars')

const onIndexResoSuccess = response => {
  const showResoHtml = showResoTemplate({ reservations: response.reservations })
  $('.reso-content').html(showResoHtml)
  $('.reso-content').show()
  $('#clear-reso').show()

  $('#message').text(`Retrieving Reservations Successful!`)

  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const onIndexResoFailure = () => {
  $('#message').text('Getting Reservations Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onCreateResoSuccess = response => {
  $('#message2').text(`Reservation successfully added!`)
  $('#new-reso').trigger('reset')
  $('#message2').removeClass('failure')
  $('#message2').addClass('success')
}

const onCreateResoFailure = () => {
  $('#message2').text('Creation Failed')

  $('#message2').removeClass('success')
  $('#message2').addClass('failure')
}

const onDeleteResoSuccess = () => {
  $('#message').text(`Deletion Successful!`)

  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const onDeleteResoFailure = () => {
  $('#message').text('Deletion Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

module.exports = {
  onIndexResoSuccess,
  onIndexResoFailure,
  onCreateResoSuccess,
  onCreateResoFailure,
  onDeleteResoSuccess,
  onDeleteResoFailure
}
