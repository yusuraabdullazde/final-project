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
    menu.style.transform = "translateY(100%)"
    menu.classList.add("active")
    closebtn.addEventListener("click", () => {
        menu.style.transform = "translateY(0%)"
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
        </div>`
            })
        })
}

myData()

const card2 = document.querySelector(".cards")
s = 1
function myCard() {
    fetch(`http://localhost:3000/card?_page=${s}&_limit=3`)
        .then(res => res.json())
        .then(data => {
            data.forEach(elem => {
                card2.innerHTML += `
                <div class="card" style="width: 25rem;">
                            <img src="${elem.image}"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h6 class="card-title">${elem.first_name}</h6>
                                <h3>${elem.last_name}</h3>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a…</p>
                            </div>
                        </div>`


            })
        })
}

myCard()


const li = document.querySelector("li a")
li.addEventListener("click", ()=>{
    li.classList.add("active")
})






const drImg = document.querySelector("#dr-img")
page = 1
function doctorCard() {
    fetch(`http://localhost:3000/doctor?_page=${page}&_limit=4`)
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
                        <span class="name">${element.name}</span>
                        <p>${element.pese}</p>
                    </div> `
            })
        })
}

doctorCard()



const videoicon = document.querySelector("#videoicon")
videoicon.addEventListener('click', () => {
    console.log("salam");
    const modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = `
    <iframe width="660" height="500" src="https://www.youtube.com/embed/qsLEODxl35Q?si=NccNCSnyOCUihaQp" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
     picture-in-picture; web-share" allowfullscreen></iframe>
     <i class="bi bi-x-lg"></i>
    `
    document.body.appendChild(modal)
    const closebtn = document.querySelector(".bi-x-lg")
    closebtn.addEventListener("click", () => {
        modal.remove()
    })
})


