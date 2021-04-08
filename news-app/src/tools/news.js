
const request = require('request')

const news = (callback)=>{
    
   
    const newsUrl ='https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=243a9783590b47b8b0142b896764501f'
    
    request({url:newsUrl, json:true}, (error , response)=>{
        
        if(error){
            callback('no Internet connection' , undefined)
        }else if(response.body.articles.length === 0){
            callback('unable to find country' , undefined)
        }else {
             for (let i=0 ; i<= response.body.articles.length ; i++){
            callback(undefined , {
            title :response.body.articles[i].title,
            description :response.body.articles[i].description,
            urlImage : response.body.articles[i].urlToImage
            
           })
          
         } 
         

        
           
        }
    })
}

module.exports = news