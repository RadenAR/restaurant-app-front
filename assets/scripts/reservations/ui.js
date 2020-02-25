'use strict'

const showResoTemplate = require('../templates/reservation-listing.handlebars')

const onIndexResoSuccess = response => {
  console.log(response)
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
  $('#message').text(`Reservation successfully added!`)
  $('#new-reso').trigger('reset')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const onCreateResoFailure = () => {
  $('#message').text('Creation Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
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
