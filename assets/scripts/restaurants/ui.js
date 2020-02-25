'use strict'
const showRestaurantsTemplate = require('../templates/restaurant-listing.handlebars')

const onCreateSuccess = response => {
  $('#message').text(`${response.restaurant.name} successfully added!`)
  $('#new-restaurant').trigger('reset')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
const onCreateFailure = () => {
  $('#message').text('Creation Failure')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
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
}

const onIndexFailure = () => {
  $('#message').text('Getting Restaurants Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onDeleteSuccess = () => {
  $('#message').text(`Deletion Successful!`)

  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const onDeleteFailure = () => {
  $('#message').text('Deletion Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onUpdateSuccess = () => {
  $('#message').text(`Update Successful!`)
  // $('#update').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // $('#update').hide()
}

const onUpdateFailure = () => {
  $('#message').text('Update Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
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
