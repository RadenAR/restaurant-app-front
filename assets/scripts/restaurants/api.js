const config = require('../config')
const store = require('../store')

const create = data => {
  data.user_id = store.user.id
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteRestaurant = (id) => {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const update = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

module.exports = {
  create,
  index,
  deleteRestaurant,
  update
}
