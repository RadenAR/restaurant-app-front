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

  $('.content').hide()
  $('#clear-restaurants').hide()
  clearMessage()
}

const onIndexResoFailure = () => {
  $('#message').text('Getting Reservations Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onCreateResoSuccess = response => {
  $('#message2').text(`Reservation successfully added!`)
  $('#new-reso').trigger('reset')
  $('#message2').removeClass('failure')
  $('#message2').addClass('success')

  setTimeout(function () {
    $('#message2').text('')
    $('#message2').removeClass('failure')
    $('#message2').removeClass('success')
  }, 5000)
}

const onCreateResoFailure = () => {
  $('#message2').text('Creation Failed')

  $('#message2').removeClass('success')
  $('#message2').addClass('failure')

  setTimeout(function () {
    $('#message2').text('')
    $('#message2').removeClass('failure')
    $('#message2').removeClass('success')
  }, 5000)
}

const onDeleteResoSuccess = () => {
  $('#message').text(`Deletion Successful!`)

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onDeleteResoFailure = () => {
  $('#message').text('Deletion Failed')

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
  onIndexResoSuccess,
  onIndexResoFailure,
  onCreateResoSuccess,
  onCreateResoFailure,
  onDeleteResoSuccess,
  onDeleteResoFailure
}
