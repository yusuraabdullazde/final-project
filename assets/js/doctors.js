const drImg = document.querySelector("#dr-img")

function doctorCard() {
    fetch(`http://localhost:3000/doctor`)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                drImg.innerHTML += `
            <div class="dr-img">
                        <div class="sekil">
                            <img src="${element.image}"
                                alt="">
                        </div>
                        <div class="none">
                        <a href="https://facebook.com">
                        <i class="bi bi-facebook"></i>
                        </a>
                        <a href="./doctordetail.html?id=${element.id}">
                        <i class="bi bi-info-circle"></i>
                        </a>
                        <a href="https://twitter.com">
                        <i class="bi bi-twitter"></i>
                        </a>
                    </div>
                        <span>${element.name}</span>
                        <p>${element.pese}</p>
                    </div> `
            })
        })
}

doctorCard()


const menu = document.querySelector(".list")
const menubtn = document.querySelector("#menu")
const closebtn = document.querySelector("#close")
menubtn.addEventListener("click", () => {
    menu.style.transform = "translateY(100%)"
    menu.classList.add("active")
    closebtn.addEventListener("click", () => {
        menu.style.transform = "translateY(0%)"
        menu.classList.remove("active")
    })
})