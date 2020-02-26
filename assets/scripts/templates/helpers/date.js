const moment = require('moment')
moment().format()

const date = original => {
  return moment(original, 'dddd, MMMM Do YYYY')
}

module.exports = date
