
const express = require('express')
const app = express()
const time=((new Date()).getHours())+ " : "+((new Date()).getMinutes())


app.get('/', (req, res) => {
  res.send('ok')
})
app.get('/test', (req, res) => {
  res.status(200).send({status: res.statusCode, message:"ok"})
})
app.get('/time', (req, res) => {
  res.status(200).send({status: res.statusCode, message:time})
})
app.get('/hello/:id',(req, res)=>{
const id=req.params.id;
res.status(200).send({status: res.statusCode, message:id})
})

app.get('/search', (req, res) => {
  const search = req.query.s;

  if (!search) {
      res.status(500).json({
          status: 500,
          error: true,
          message: "you have to provide a search"
      });
  } else {
      res.json({
          status: 200,
          message: "ok",
          data: search
      });
  }
});





app.listen(port = 3002, () => {
    console.log(`OK ${port}`)
  })