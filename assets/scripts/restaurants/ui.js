'use strict'
const showRestaurantsTemplate = require('../templates/restaurant-listing.handlebars')

const onCreateSuccess = response => {
  $('#message').text(`${response.restaurant.name} successfully added!`)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
const onCreateFailure = response => {
  $('#message').text('Creation Failure')
  $('#sign-up').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onIndexSuccess = response => {
  const showRestaurantsHtml = showRestaurantsTemplate({ restaurants: response.restaurants })
  $('.content').html(showRestaurantsHtml)
  $('.content').show()
  $('#clear-restaurants').show()
}

const onIndexFailure = response => {
  $('#message').text('Getting Restaurants Failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure
}
