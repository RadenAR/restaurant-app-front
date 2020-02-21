'use strict'
const showRestaurantsTemplate = require('../templates/restaurant-listing.handlebars')

const onCreateSuccess = response => {
  $('#message').text(`${response.restaurant.name} successfully added!`)
  console.log(response)
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
  console.log(response)
  const showRestaurantsHtml = showRestaurantsTemplate({ restaurants: response.restaurants })
  $('.content').html(showRestaurantsHtml)
  $('.content').show()
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
