let signup = document.querySelector("#register")
let signin = document.querySelector("#login");
signup.addEventListener("click", () => {
    let signame = document.querySelector(".sfirstname");
    let signemail = document.querySelector(".semail");
    let signpassword = document.querySelector(".spassword");

    if (signame.value.trim() && signemail.value.trim() && signpassword.value.trim()) {
        axios.post("http://localhost:3000/doctor", {
           first_name: signame.value,
            email: signemail.value,
            password: signpassword.value,
            pending:[],
            accepted:[]
        })
        .then(res=>console.log(res.data))

    } else {
        alert("bosdu")
    }
});
let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;

signin.addEventListener("click", (e) => {
    e.preventDefault()
    let loginemail = document.querySelector(".lemail").value;
    let loginpassword = document.querySelector(".lpassword").value;
    fetch('http://localhost:3000/doctor')
    .then(res=>res.json())
      .then(data => {
        console.log(data);
        let currentUserInfo = data.find((user)=>user.email == loginemail)
        if(currentUserInfo){
            if(currentUserInfo.password == loginpassword){
                localStorage.setItem('currentUser', JSON.stringify(currentUserInfo));
                window.location = './index.html'
            }else{
                alert("no pasword")
            }      
        }else{
           alert("no name")
        }
      })
})