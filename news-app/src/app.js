const express = require('express')
const app = express()
const port = 3000


const path = require('path')
const publicDirectory = path.join(__dirname,'../public')


app.use(express.static(publicDirectory))
app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)

const hbs = require('hbs')
const partialPath = path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialPath)

const news = require('./tools/news');

app.get('/about',(req,res)=>{
    news((error,data)=>{
            if(error){
                return res.send({error})
            }
                res.send({
                   
                    title:  data.title,
                    description: data.description,
                    image:data.urlImage
                })
               
             })
        })
    

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Welcome In Egyption news site',
        
    })
   

})

app.get('*',(req,res)=>{
    res.render('404page',{
        title:'Page Not Found',
        name:'Deafult'
    })
})

  app.listen(port,()=>{
      console.log('Listening on port 3000')
  })


