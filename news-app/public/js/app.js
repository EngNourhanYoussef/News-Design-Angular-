
//  const fetch = require('node-fetch');
 
let fun = async()=>{
    try{
        
        const res = await fetch('http://localhost:3000/about')
        const data = await res.json()
      
       document.getElementById('title').textContent = data.title
       document.getElementById('describtion').textContent = data.description
       document.getElementById('myImage').src = data.image
       document.getElementById('error').textContent = data.error
        
    }catch(e){
        console.log(e)
    }
}
fun()



