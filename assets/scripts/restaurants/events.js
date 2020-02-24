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
  console.log(updateRest)

  const id = store.toBeUpdated

  api.update(updateRest, id)
    .then(function () {
      onIndex(event)
      ui.onUpdateSuccess()
      store.toBeUpdated = null
    })
    .catch(ui.onUpdateFailure)
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

module.exports = {
  onCreate,
  onIndex,
  onClear,
  onDelete,
  showUpdate
  // onUpdate
}
