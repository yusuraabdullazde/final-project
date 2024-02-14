const card2 = document.querySelector(".blog-info")
function myCard() {
    page=1
    fetch(`http://localhost:3000/card?_page=${page}&_limit=4`)
        .then(res => res.json())
        .then(data => {
            data.forEach(elem => {
                card2.innerHTML += `
                <div class="card" id="blog-img-info" style="margin-bottom:50px">
                           <img src="${elem.image}"
                                class="card-img-top" alt="...">
                           <div class="card-body">
                                <h6 class="card-title">${elem.first_name}</h6>
                                <h3>${elem.last_name}</h3>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a sit amet consectetur adipisicing elit. A, sed?
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas est maiores nam dicta, quasi corrupti voluptatibus nobis repellendus, commodi magni qui natus nihil, autem quas. Culpa voluptatum, ex, sit enim vero esse delectus nisi pariatur fugit veritatis officiis laboriosam!</p>
                          </div>
                 </div>`
            })
        })
}

myCard()

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

const all=document.querySelector(".all")
const secilmis=document.querySelector(".secilmis")
const news =document.querySelector(".new")
