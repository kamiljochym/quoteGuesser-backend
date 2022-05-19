const express = require('express')
const axios = require('axios')

const cors = require('cors')
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send("backend loll baby")
})

app.get('/quote', (req, res) => {
    axios
        .get('http://www.famous-quotes.uk/api.php?id=random&minpop=80')
        .then(response => {
            res.json(response.data)
        })

})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})