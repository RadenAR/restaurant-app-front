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

module.exports = {
  create
}
