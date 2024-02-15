
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


const form = document.querySelector("form")
const firstname = document.querySelector(".firstname")
const lastname = document.querySelector(".lastname")
const email = document.querySelector(".email")
const message = document.querySelector(".message")
const option = document.querySelector("option")
const submit = document.getElementsByClassName("form-contact")[0]

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let obj = {
    first_name: firstname.value,
    last_name: lastname.value,
    email: email.value,
    message: message.value,
  }
  axios.get('http://localhost:3000/account')
    .then(res => res.data)
    .then(data => {
      const id = data.find(f => f.first_name == option.value)
      if (id) {
        console.log(id);
        let y = id.type
        console.log(y);
        y.pending.push(obj)
        console.log(y);
        axios.patch('http://localhost:3000/account/' + id.id, { type: y })
      }
    })
  axios.get('http://localhost:3000/myaccount')
    .then(res => res.data)
    .then(data => {
      const ids = data.find(f => f.first_name == option.value)
      if (ids) {
        console.log(obj);
        yx = ids.type
        yx.pending.push(obj)
        console.log(yx);
        axios.patch('http://localhost:3000/myaccount/' + ids.id, { type: yx })
      }
    })
    
})



