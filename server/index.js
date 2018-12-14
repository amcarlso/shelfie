const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const ctrl = require('./controller')
const {PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/things', ctrl.getAll)
app.post('/api/thing', ctrl.createItem)
app.delete('/api/thing/:id', ctrl.deleteItem )

massive(CONNECTION_STRING).then(connection => {
  app.set('db', connection)
  app.listen(PORT, () => console.log(`listening on port ${PORT}`))
}).catch(err => console.log(err))
