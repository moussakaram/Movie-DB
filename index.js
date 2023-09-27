
const express = require('express')
const app = express()
const time=((new Date()).getHours())+ " : "+((new Date()).getMinutes())
const movies = [ { title: 'Jaws', year: 1975, rating: 8 }, { title: 'Avatar', year: 2009, rating: 7.8 }, { title: 'Brazil', year: 1985, rating: 8 }, { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 } ]

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

app.get(' /movies/create',(req, res)=>{
  const id=req.params.id;
  res.status(200).send({status: res.statusCode, message:id})
  });
  //to read all the movie available in the array movies 
  app.get('/movies/read', (req, res) => {
    res.status(200).send({ status: res.statusCode, data: movies });
});
// to get movies ordered by date 
app.get('/movies/read/by-date',(req , res) => {
  const moviesDate= movies.sort((a, b) => {
    return b.year - a.year;  
});

res.status(200).send({ status: res.statusCode, data: moviesDate });
});
 
// to get movies ordered by rating  
app.get('/movies/read/by-rating',(req , res) => {
  const moviesRating= movies.sort((a, b) => {
    return b.rating - a.rating;  
});

res.status(200).send({ status: res.statusCode, data: moviesRating });
});

// to get movies ordered by title 
app.get('/movies/read/by-title',(req , res) => {
  const moviesTitle= movies.sort((a, b) => {
    return b.title - a.title;  
});

res.status(200).send({ status: res.statusCode, data: moviesTitle });
});

//here 
  
    app.get('/movies/update',(req, res)=>{
      const id=req.params.id;
      res.status(200).send({status: res.statusCode, message:id})
      });


      app.get('/movies/delete',(req, res)=>{
        const id=req.params.id;
        res.status(200).send({status: res.statusCode, message:id})
        });






app.listen(port = 3002, () => {
    console.log(`OK ${port}`)
  })