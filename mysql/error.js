const error500 = (res, err) => {
  console.log('SQL Error: ', err)
  return res.status(500).send('Server error');
}

const error404 = (res, err) => {
  console.log('SQL Error: ', err)
  return res.status(404).send('Invalid request');
}

module.exports = { error500, error404 }