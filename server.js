const express=require('express');
const nextJs=require('next');

async function start(){

    const app=nextJs({dev:true});
    const server=express();
    await app.prepare();


server.get('/*',async (req,res,next)=>{

    try{
        app.render(req,res,"/");
    }
    catch(err){
        next(err)
    }
})

server.listen(3000,(error)=>{
    if(error){  
        console.error(error)
            };

})
}

start();