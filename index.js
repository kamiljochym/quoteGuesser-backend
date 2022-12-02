const express = require('express')
const axios = require('axios')

const cors = require('cors')
const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('backend loll baby')
})

app.get('/quote', (req, res) => {
  axios
    .get('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': process.env.QUOTES_API,
      },
    })
    .then((response) => {
      res.json(response.data)
    })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
