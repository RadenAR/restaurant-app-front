const moment = require('moment')

const date = original => {
  return moment(original).format('dddd, MMMM Do YYYY')
}

module.exports = date
