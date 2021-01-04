const express = require('express');
const port = process.env.PORT || 3000;
const ProductData = require('./src/model/Productdata');
const AuthorData = require('./src/model/authordata');

// const User = require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');

const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
username='admin';
password='1234';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var product = {       
        title : req.body.product.title,
        author : req.body.product.author,
        genre : req.body.product.genre,
        image : req.body.product.image,
        
   }       
   var product = new ProductData(product);
   product.save();
});
app.post('/author/insert',verifyToken,function(req,res){
   
  console.log(req.body);
 
  var author = {       
      title : req.body.product.title,
      year : req.body.product.year,
      genre : req.body.product.genre,
      image : req.body.product.image
      
 }       
 var author = new AuthorData(author);
 author.save();
});
app.get('/products',function(req,res){
    
  ProductData.find()
              .then(function(authors){
                  res.send(authors);
              });
});
app.get('/authors',function(req,res){
    
    AuthorData.find()
                .then(function(products){
                    res.send(products);
                });
});
app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    ProductData.findOne({"_id":id})
    .then((product)=>{
        res.send(product);
    });
})
app.get('/author/:id',  (req, res) => {
  
  const id = req.params.id;
    AuthorData.findOne({"_id":id})
    .then((product)=>{
        res.send(product);
    });
})

app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      title = req.body.title,
        author = req.body.author,
        genre = req.body.genre,
        image = req.body.image,
        
     ProductData.findByIdAndUpdate({"_id":id},
                                  {$set:{"title":title,
                                  "author":author,
                                  "genre":genre,
                                  "image":image
                                  }})
     .then(function(){
         res.send();
     })
   })
   app.put('/author/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    title = req.body.title,
    year = req.body.year,
    genre = req.body.genre,
    image = req.body.image
      
   AuthorData.findByIdAndUpdate({"_id":id},
                                {$set:{"title":title,
                                "year":year,
                                "genre":genre,
                                "image":image
                                }})
   .then(function(){
       res.send();
   })
 })
 
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     ProductData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
   app.delete('/author/remove/:id',(req,res)=>{
   
    id = req.params.id;
    AuthorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
     
//author       


app.listen(port,()=>{console.log("Server ready at" + port)});

