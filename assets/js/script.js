let num = document.querySelectorAll(".num")
console.log(num);
let interval = 2000;
num.forEach((nums) => {
    let start = 0
    let end = parseInt(nums.getAttribute("data-val"))
    let dur = Math.floor(interval / end)

    let count = setInterval(function () {
        start += 1;
        nums.textContent = start + "+";
        if (start == end) {
            clearInterval(count)
        }
    }, dur);
})

const menu = document.querySelector(".list")
const menubtn = document.querySelector("#menu")
const closebtn = document.querySelector("#close")
menubtn.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)"
    menu.classList.add("active")
    closebtn.addEventListener("click", () => {
        menu.style.transform = "translateX(0%)"
        menu.classList.remove("active")
    })
})

const card = document.querySelector(".card-element")
function myData() {
    fetch("http://localhost:3000/api")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                card.innerHTML += `
            <div class="item">
            <div class="card-img">
              <img src="${element.image}" alt="">
            </div>
            <h3>${element.first_name}</h3>
            <p>${element.last_name}.</p>
            <a href="./detail.html?id=${element.id}">Learn More <i class="bi bi-arrow-right"></i></a>
            <i class="bi bi-cart4" id="basket"></i>
        </div>`
            })
        })
}

myData()

const card2 = document.querySelector(".cards")
function myCard() {
    fetch('http://localhost:3000/card')
        .then(res => res.json())
        .then(data => {
            fetch("http://localhost:3000/fav")
                .then(res => res.json())
                .then(datafav => {
                    data.forEach(elem => {
                        if (datafav.find(f => f.id == elem.id)) {
                            card2.innerHTML += `
                <div class="card" style="width: 25rem;">
                            <img src="./assets/image/covid-vaccine-heart-hands-and-nurse-with-patient-GJ2BW2R-1024x683.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h6 class="card-title">${elem.first_name}</h6>
                                <h3>${elem.last_name}</h3>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a…</p>
                                <div class="fav-basket">
                                    <i class="bi bi-heart-fill bi${elem.id}" onclick="addFav(${elem.id})"></i>
                                 </div>
                            </div>
                        </div>`
                        } else {
                            card2.innerHTML += `
                <div class="card" style="width: 25rem;">
                            <img src="./assets/image/covid-vaccine-heart-hands-and-nurse-with-patient-GJ2BW2R-1024x683.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h6 class="card-title">${elem.first_name}</h6>
                                <h3>${elem.last_name}</h3>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a…</p>
                                <div class="fav-basket">
                                    <i class="bi bi-heart" bi${elem.id} onclick="addFav(${elem.id})"></i>
                                 </div>
                            </div>
                        </div>`
                        }

                    })
                })
        })
}

myCard()
function addFav(id) {
    const bi = document.querySelector(`.bi${id}`)
    axios.get(`http://localhost:3000/card/${id}`)
        .then(res => {
            return res.data
        })
        .then(res => {
            axios.get("http://localhost:3000/fav")
                .then(post => {
                    let like = post.data.find(f => f.id == res.id)
                    if (!like) {
                        axios.post("http://localhost:3000/fav", res)
                        bi.classList.add("bi-heart-fill")
                        bi.classList.remove("bi-heart")
                    } else {
                        axios.delete(`http://localhost:3000/fav/${id}`)
                        bi.classList.remove("bi-heart-fill")
                        bi.classList.add("bi-heart")

                    }
                })
        })
}

const li = document.querySelectorAll(".list li a")
const section = document.querySelectorAll("section")

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            li.forEach(links => {
                links.classList.remove("active")
                document.querySelector('.list li a [href*=" + id + "]').classList.add("active")
            })
        }
    })
}


function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "yusurea@gmail.com",
        Password: "abdullazade2003",
        To: 'yusure2003@gmail.com',
        From: document.querySelector(".email").value,
        Subject: "New Contact Form Enquiry",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}


const drImg = document.querySelector("#dr-img")
function doctorCard() {
    fetch("http://localhost:3000/doctor")
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
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-twitter"></i>
                        </div>
                        <h4>${element.name}</h4>
                        <p>${element.pese}</p>
                    </div> `
            })
        })
}

doctorCard()