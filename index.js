const express = require('express')
const connect=require("./src/configs/db")
const path = require('path')
const userControllers=require("./src/controllers/user.controllers")
const PORT = process.env.PORT || 5000
const app=express()
app.use(express.json());
app.use("/users",userControllers);
 app.use(express.static(path.join(__dirname, 'public')))
 app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT,async () =>{
  try {
    await connect();
    console.log(`Listening on ${ PORT }`)
    
  } catch (error) {
    console.log(error)
    
  } 
})

