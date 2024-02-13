function login() {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    let user_records = new Array()
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.email == email && v.password == password
    })) {
        alert("login successful")
        let current_user = user.record.filter((v) => {
            return v.email == email && v.password == password
        })[0]
        localStorage.setItem("first_name", current_user.firstname);
        localStorage.setItem("email", current_user.email);
        window.location.href = "C:\Users\yusur\OneDrive\Desktop\final-project\adminpanel.html"
    }
    else {
        alert("login fail")
    }
}

login()