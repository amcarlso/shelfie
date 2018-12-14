const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const ctrl = require('./controller')
const app = express()
const {PORT, CONNECTION_STRING} = process.env

app.use(express.json())


massive(CONNECTION_STRING).then(connection => {
  app.set('db', connection)
  app.listen(PORT, () => console.log(`listening on port ${PORT}`))
}).catch(err => console.log(err))
