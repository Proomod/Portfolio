const nodemailer=require("nodemailer");
require('dotenv').config();


async function sendMail(req,res,fn){
   const {userName,email,message}=req.body;
   if(!(userName && email && message))
    return res.send("please enter all the fields");
    
  var transporter=nodemailer.createTransport({

    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  });

  const mailOptions={
    from: email,
     to:process.env.EMAIL,
     subject:userName,
     html:`
     <h1>sent from : ${email}</h1>
     <h3>Name: ${userName}</h3>
     <p>${message}</p>`
  }


  return new Promise((resolve,reject)=>{
  transporter.sendMail(mailOptions)
  .then((res)=>{
    resolve(res)
  })
  .catch((err)=>{
   reject(err)
  });
  })
}



export default async function handler(req,res){
 if (req.method === "POST"){
    try{
      await sendMail(req,res);
      return res.send("your message is delivered");
    }
    catch(err){
      console.log(err);
      return res.status(500).send(err);
    }
}
 else{
   return res.status(403).send("We don't do that here");
  
 }
};