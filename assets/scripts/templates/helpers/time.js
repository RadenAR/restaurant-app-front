const moment = require('moment')
moment().format()

const time = original => {
  return moment(original).format('h:mm a')
}

module.exports = time
