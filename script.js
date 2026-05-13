function sendEmail(){
  const templateParams={
    name:document.querySelector("#name").value,
    email:document.querySelector("#email").value,
    subject:document.querySelector("#sub").value,
    message:document.querySelector("#mssg").value,
  } 
  emailjs
  .send( "service_jdd7fv7","template_jeo71sf",templateParams)
  .then(()=>alert("email send!").catch(()=>alert("email not send!")));
  
}