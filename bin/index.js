const express=require('express')
const app=express()
const port= 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gudfus29112:1234@cluster0.bghyghp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
}).then(()=>console.log('MongoDB connected...'))
  .catch(err => console.log(err)) 

  app.get('/',(req,res) => res.send('hello world'))

  app.listen(port,() => console.log(`Example app listening on port ${port}!`))
