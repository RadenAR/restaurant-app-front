const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../config')

const onCreate = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndex = event => {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onClear = event => {
  event.preventDefault()
  $('.content').hide()
  $('#clear-restaurants').hide()
}

const onDelete = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteRestaurant(id)
    .then(function () {
      onIndex(event)
      ui.onDeleteSuccess()
    })
    .catch(ui.onDeleteFailure)
}

const showUpdate = event => {
  event.preventDefault()
  store.toBeUpdated = $(event.target).data('id')
  const data = $(event.target).parent()
  const name = data.find('.name').text()
  const address = data.find('.address').text()
  const rating = data.find('.rating').text()
  const cuisine = data.find('.cuisine').text()
  const healthy = data.find('.healthy').text()

  const updateRest = {
    name: name.trim(),
    address: address.trim(),
    rating: rating.trim(),
    cuisine: cuisine.trim(),
    healthy: healthy.trim()
  }

  const id = store.toBeUpdated

  api.update(updateRest, id)
    .then(function () {
      // onIndex(event)
      ui.onUpdateSuccess()
      store.toBeUpdated = null
    })
    .catch(ui.onUpdateFailure)
}

const onNewRest = event => {
  event.preventDefault()
}

// const onUpdate = event => {
//   event.preventDefault()
//
//   const form = event.target
//   const data = getFormFields(form)
//   const id = store.toBeUpdated
//
//   api.update(data, id)
//     .then(function () {
//       onIndex(event)
//       ui.onUpdateSuccess()
//       store.toBeUpdated = null
//     })
//     .catch(ui.onUpdateFailure)
// }

const checkNumber = event => {
  if (event.key !== 'Backspace' && event.key !== '1' && event.key !== '2' && event.key !== '3' && event.key !== '4' && event.key !== '5' && event.key !== '6' && event.key !== '7' && event.key !== '8' && event.key !== '9' && event.key !== '0' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && $(event.target).text().trim().length === 0) {
    event.preventDefault()
  } else if ($(event.target).text().trim().length === 1 && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== '0') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length > 1 && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
    event.preventDefault()
  }
}
const checkBool = event => {
  // for true
  if ($(event.target).text().trim().length === 0 && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 't' && event.key !== 'f') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length === 1 && $(event.target).text().trim() === 't' && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'r') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length === 2 && $(event.target).text().trim() === 'tr' && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'u') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length === 3 && $(event.target).text().trim() === 'tru' && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'e') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length === 4 && $(event.target).text().trim() === 'true' && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length > 4 && $(event.target).text().trim() === 't' && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
    event.preventDefault()
  }
  // for false
  if ($(event.target).text().trim().length === 0 && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 't' && event.key !== 'f') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length === 1 && $(event.target).text().trim() === 'f' && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'a') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length === 2 && $(event.target).text().trim() === 'fa' && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'l') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length === 3 && $(event.target).text().trim() === 'fal' && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 's') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length === 4 && $(event.target).text().trim() === 'fals' && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'e') {
    event.preventDefault()
  } else if ($(event.target).text().trim().length > 4 && event.key !== 'Backspace' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
    event.preventDefault()
  }
}

module.exports = {
  onCreate,
  onIndex,
  onClear,
  onDelete,
  showUpdate,
  // onUpdate
  onNewRest,
  checkNumber,
  checkBool
}
