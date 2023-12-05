const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000
// getting the url of the front end page

app.get('/', (req,res)=>{
   res.sendFile(__dirname+'/index.html') 
})
app.get('/about', (req,res)=>{
    res.sendFile(__dirname+'/about.html') 
 })
 app.get('/contact', (req,res)=>{
   res.sendFile(__dirname+'/contact.html') 
})
app.get('/services', (req,res)=>{
   res.sendFile(__dirname+'/service.html') 
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
    })
