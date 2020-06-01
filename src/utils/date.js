const dateFormat = require('dateformat');


const getDate = () => {
  const now = new Date;
  let today = dateFormat(now, 'longDate')


  return today;
}

module.exports = getDate;