
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


const form=document.querySelector("form")
const firstname=document.querySelector(".firstname")
const lastname=document.querySelector(".lastname")
const email=document.querySelector(".email")
const message=document.querySelector(".message")
const option=document.querySelector("option")
const submit=document.getElementsByClassName("form-contact")[0]

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  
  let obj={
      first_name:firstname.value,
      last_name:lastname.value,
      email:email.value,
      doctor:Option.value,
      message:message.value
  }
  axios.post("http://localhost:3000/form", obj)
  .then(res=>console.log(res.data))
  .the
})



