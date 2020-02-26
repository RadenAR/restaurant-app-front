'use strict'
const showRestaurantsTemplate = require('../templates/restaurant-listing.handlebars')

const onCreateSuccess = response => {
  $('#message3').text(`${response.restaurant.name} successfully added!`)
  $('#new-restaurant').trigger('reset')
  $('#message3').removeClass('failure')
  $('#message3').addClass('success')
  setTimeout(function () {
    $('#message3').text('')
    $('#message3').removeClass('failure')
    $('#message3').removeClass('success')
  }, 5000)
}

const onCreateFailure = () => {
  $('#message3').text('Creation Failure')

  $('#message3').removeClass('success')
  $('#message3').addClass('failure')
  setTimeout(function () {
    $('#message3').text('')
    $('#message3').removeClass('failure')
    $('#message3').removeClass('success')
  }, 5000)
}

const onIndexSuccess = response => {
  const showRestaurantsHtml = showRestaurantsTemplate({ restaurants: response.restaurants })
  $('.content').html(showRestaurantsHtml)
  $('.content').show()
  $('#clear-restaurants').show()

  $('#message').text(`Retrieving Restaurants Successful!`)

  $('#message').removeClass('failure')
  $('#message').addClass('success')

  $('#clear-reso').hide()
  $('.reso-content').hide()
  clearMessage()
}

const onIndexFailure = () => {
  $('#message').text('Getting Restaurants Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onDeleteSuccess = () => {
  $('#message').text(`Deletion Successful!`)

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onDeleteFailure = () => {
  $('#message').text('Deletion Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onUpdateSuccess = () => {
  $('#message').text(`Update Successful!`)
  // $('#update').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')

  clearMessage()

  // $('#update').hide()
}

const onUpdateFailure = () => {
  $('#message').text('Update Failed')

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
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure
}
