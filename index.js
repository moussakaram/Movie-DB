
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('ok')
})
app.get('/test', (req, res) => {
  res.status(200).send({status: res.statusCode, message:"ok"})
})
app.get('/time', (req, res) => {
  res.status(200).send({status: res.statusCode, message:"<Time>"})
})



app.listen(port = 3002, () => {
    console.log(`OK ${port}`)
  })