'use strict'

const config = require('../config')
const store = require('../store')

const indexReso = () => {
  return $.ajax({
    url: config.apiUrl + '/reservations',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createReso = data => {
  data.user_id = store.user.id
  return $.ajax({
    url: config.apiUrl + '/reservations',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const deleteReso = (id) => {
  return $.ajax({
    url: config.apiUrl + '/reservations/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  indexReso,
  createReso,
  deleteReso
}
