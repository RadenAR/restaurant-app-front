const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

const onClear = () => {
  $('.content').hide()
  $('#clear-restaurants').hide()
}

const onDelete = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteRestaurant(id)
    .then(function () {
      onIndex(event)
    })
    .catch(ui.onDeleteFailure)
}

module.exports = {
  onCreate,
  onIndex,
  onClear,
  onDelete
}
