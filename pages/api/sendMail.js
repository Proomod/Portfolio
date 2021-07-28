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


  return transporter.sendMail(mailOptions)
  .then(()=>{
    return res.send("mail sent");
  })
  .catch((err)=>{
   return res.send(err);
  });

}



export default async function handler(req,res){
 if (req.method === "POST"){
  await sendMail(req,res);
}
 else{
   res.send("We don't do that here");
  
 }
};