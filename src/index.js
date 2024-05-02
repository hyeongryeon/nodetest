const express=require('express')
const app=express()
const port= 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./model/User');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
}).then(()=>console.log('MongoDB connected...'))
  .catch(err => console.log(err)) 

  app.get('/',(req,res) => res.send('hello world 하이하이'))

  app.post('/register',(req, res) =>{

    // 회원가입에 필요한 정보를 client에서 가져오면
    // 해당 정보를 DB에 넣어줄 사전 작업

      const user = new User(req.body)

      //몽고DB 메서드
      user.save().then(res =>{ 
        console.log('정훈석등록');
      })  
      .catch(err =>{
        console.error(err);
      });

    }) 


  




  app.listen(port,() => console.log(`Example app listening on port ${port}!`))
