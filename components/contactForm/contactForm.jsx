import styles from "./contactForm.module.css";
import Button from "../button/button";
import {useState,useEffect,useRef} from 'react';

export default function ContactForm(props) {
  const [isValid,setValidity]=useState(false);
  const [error,showError]=useState(false);
  const {value:nameValue,reset:nameReset,bind:nameBind}=useInput("");
  const {value:emailValue,reset:emailReset,bind:emailBind}=useInput("");
  const {value:messageValue,reset:messageReset,bind:messageBind}=useInput("");

  // useEffect(() => {
  //  showError(isValid?false:true);
  // }, [isValid])

  function handleSubmit(event) {
  event.preventDefault();
  validator();
 if(isValid){
   showError(false);
   fetch(`/api/sendMail`,{ 
     method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: nameValue,
      email: emailValue,
      message: messageValue,
    })
  })
  .then(response=>{
    console.log(response);
    if(response.status==200){
      nameReset();
      emailReset();
      messageReset();
      alert("Your message has been sent!");
    }
  nameReset();  
  emailReset();
  messageReset();
 });


  }
  showError(true)
   }
  
   const validator=()=>{
     setValidity((nameValue.length>3 && nameValue.length<20)&& nameValue.match(/^[a-zA-Z ]+$/)) &&
    emailValue.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/) &&
    (messageValue>3 && messageValue.match(/^[\w\d\s\.\'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]{4,196}$/) && messageValue.length<1000);

  }
  
  return (
   <div className={styles.formWrapper}>
      <form action="" className={`${styles.contactForm} props.classname`} onSubmit={handleSubmit}>
      <input type="text" className={styles.contactName}  
        value={nameValue} {...nameBind}
      placeholder="name" />
      <input type="text" className={styles.contactEmail} 
        value={emailValue} {...emailBind}
      placeholder="email" />
      <textarea
        type="textarea"
        className={styles.contactMessage}
        value={messageValue} 
        {...messageBind}
        placeholder="message"
        rows={5}
      />
      <Button type="submit" classname={styles.sendMessageButton}>
        Send Message
      </Button>
      {error? <Message/> :null}
    </form>
    
   </div>
  );
}

const useInput=initialValue=>{
  const [value, setValue] = useState(initialValue);
 return {
    value,
    setValue,
    valid:false,
    reset:()=>setValue(""),
    bind:{
      value,
      onChange:e=>{
        setValue(e.target.value);
      }
    }
 }
}
const Message =()=>{
  return <div className={styles.errorMessage}>
    <span>Please enter a valid name,message and email address</span>
  </div>
}
  


