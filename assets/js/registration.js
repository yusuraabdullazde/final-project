const signupbtn = document.querySelector("#signupBtn")
const signinbtn = document.querySelector("#signinBtn")
const nameField = document.querySelector("#nameField")
const title = document.querySelector("#title")

// signinbtn.addEventListener("click", () => {
//     nameField.style.maxHeight = "0";
//     title.innerHTML = "Sign In"
//     signupbtn.classList.add("disabled")
//     signinbtn.classList.remove("disabled")
// })

// signupbtn.addEventListener("click", () => {
//     nameField.style.maxHeight = "60px";
//     title.innerHTML = "Sign Up"
//     signupbtn.classList.remove("disabled")
//     signinbtn.classList.add("disabled")
// })

// const firstname = document.querySelector(".firstname")
// const email = document.querySelector(".email")
// const password = document.querySelector(".password")
// signupbtn.addEventListener("click", function () {
//     if (email !== "" && firstname !== "" && password !== "") {
//         axios.post("http://localhost:3000/pending", {
//             first_name: firstname.value,
//             email: email.value,
//             password: password.value
//         })
//             .then(res => console.log(res.data))
//     }
// })


function saveData() {
    const firstname = document.querySelector(".firstname").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    // localStorage.setItem("first_name", firstname);
    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);


    let user_records = new Array()
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.email == email
    })) {
        alert("duplicat")

    } else {
        user_records.push({
            "first_name": firstname,
            "email": email,
            "password": password
        })
        localStorage.setItem("users", JSON.stringify(user_records))
    }

}

saveData()