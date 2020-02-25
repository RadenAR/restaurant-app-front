'require strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexReso = event => {
  event.preventDefault()

  api.indexReso()
    .then(ui.onIndexResoSuccess)
    .catch(ui.onIndexResoFailure)
}

const onCreateReso = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createReso(data)
    .then(ui.onCreateResoSuccess)
    .catch(ui.onCreateResoFailure)
}

const onClearReso = event => {
  event.preventDefault()
  $('.reso-content').hide()
  $('#clear-reso').hide()
}

const onDeleteReso = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteReso(id)
    .then(function () {
      onIndexReso(event)
      ui.onDeleteResoSuccess()
    })
    .catch(ui.onDeleteResoFailure)
}

const onMakeReso = event => {
  event.preventDefault()
  store.restid = $(event.target).data('id')
  $('#message2').text('')
  $('#message2').removeClass('success')
  $('#message2').removeClass('failure')
}

module.exports = {
  onIndexReso,
  onCreateReso,
  onClearReso,
  onDeleteReso,
  onMakeReso
}
