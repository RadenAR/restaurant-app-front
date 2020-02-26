const moment = require('moment')
moment().format()

const date = original => {
  return moment(original).format('dddd, MMMM Do YYYY')
}

module.exports = date
