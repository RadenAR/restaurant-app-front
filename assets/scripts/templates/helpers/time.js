const moment = require('moment')

const time = original => {
  return moment(original).format('h:mm a')
}

module.exports = time
