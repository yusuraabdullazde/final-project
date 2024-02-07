

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
  const firstname=document.querySelector("#firstname")
  const lastname=document.querySelector("#lastname")
  const email=document.querySelector("#email")
  const password=document.querySelector("#password")

  form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    let obj={
        first_name:firstname.value ,
        last_name:lastname.value,
        email:email.value,
        password:password.value
    }
    axios.post("http://localhost:3000/form", obj)
    .then(res=>console.log(res.data))
  
  })