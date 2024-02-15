let signup = document.querySelector("#register")
let signin = document.querySelector("#login");
const type = [
    {
        pending: [],
        accepted: []
    }
]
signup.addEventListener("click", () => {
    let signame = document.querySelector(".sfirstname");
    let signemail = document.querySelector(".semail");
    let signpassword = document.querySelector(".spassword");
    if (signame.value.trim() && signemail.value.trim() && signpassword.value.trim()) {

        axios.post("http://localhost:3000/account", {
            first_name: signame.value,
            email: signemail.value,
            password: signpassword.value,
            type: type
        })
            .then(res => console.log(res.data))
            window.location.reload()

    } else {
        alert("Qeydiyyatdan kecmək üçün məlumatları tam doldurun!")
    }
});

signin.addEventListener("click", (e) => {
    e.preventDefault()
    let loginemail = document.querySelector(".lemail").value;
    let loginpassword = document.querySelector(".lpassword").value;
    fetch('http://localhost:3000/account')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let currentUserInfo = data.find((user) => user.email == loginemail)
            console.log(currentUserInfo);
            if (currentUserInfo) {
                if (currentUserInfo.password == loginpassword) {
                    axios.post("http://localhost:3000/myaccount", currentUserInfo)
                    window.location = './adminpanel.html'
                } else {
                    alert("no pasword")
                }
            } else {
                alert("Daxil olmaq üçün məlumatları tam doldurun və ya qeydiyyatdan keçin!")
                window.location.reload()
            }
        })
})

const icon=document.querySelector("#eyeSlash")
const icon2=document.querySelector("#eyeSlash2")
function myfuncone(){
    const x=document.querySelector(".spassword")
    icon.classList.toggle("bi-eye")
    if(x.type==="password"){
        x.type="text"
    }else{
        x.type="password"
    }
}

function myfunctwo(){
    const y=document.querySelector(".lpassword")
    icon2.classList.toggle("bi-eye")
    if(y.type==="password"){
        y.type="text"
    }else{
        y.type="password"
    }
}