const express=require('express')
const app=express()
const port= 5000

const { User } = require('./model/User');

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gudfus29112:1234@cluster0.bghyghp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
}).then(()=>console.log('MongoDB connected...'))
  .catch(err => console.log(err)) 

  app.get('/',(req,res) => res.send('hello world'))

  app.post('/register',(req, res) =>{

    // 회원가입에 필요한 정보를 client에서 가져오면
    // 해당 정보를 DB에 넣어줄 사전 작업
    


  })




  app.listen(port,() => console.log(`Example app listening on port ${port}!`))
