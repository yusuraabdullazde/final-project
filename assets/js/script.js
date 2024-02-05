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
            <a href="#">Learn More <i class="bi bi-arrow-right"></i></a>
        </div>`
            })
        })
}

myData()

const card2=document.querySelector(".cards")
function myCard(){
    fetch('http://localhost:3000/card')
    .then(res=>res.json())
    .then(data=>{
       fetch("http://localhost:3000/fav")
       .then(res=>res.json())
       .then(datafav=>{
        data.forEach(elem=>{
            if(datafav.find(f=>f.id==elem.id)){
                card2.innerHTML+=`
                <div class="card" style="width: 25rem;">
                            <img src="./assets/image/covid-vaccine-heart-hands-and-nurse-with-patient-GJ2BW2R-1024x683.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h6 class="card-title">${elem.first_name}</h6>
                                <h3>${elem.last_name}</h3>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a…</p>
                                <div class="fav-basket">
                                    <i class="bi bi-heart-fill bi${elem.id}" onclick="addFav(${elem.id})"></i>
                                    <i class="bi bi-cart4"></i>
                                 </div>
                            </div>
                        </div>`
            }else{
                card2.innerHTML+=`
                <div class="card" style="width: 25rem;">
                            <img src="./assets/image/covid-vaccine-heart-hands-and-nurse-with-patient-GJ2BW2R-1024x683.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h6 class="card-title">${elem.first_name}</h6>
                                <h3>${elem.last_name}</h3>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a…</p>
                                <div class="fav-basket">
                                    <i class="bi bi-heart" bi${elem.id} onclick="addFav(${elem.id})"></i>
                                    <i class="bi bi-cart4"></i>
                                 </div>
                            </div>
                        </div>`
            }
           
        })
       })
    })
}

myCard()
function addFav(id){
    const bi=document.querySelector(`.bi${id}`)
    axios.get(`http://localhost:3000/card/${id}`)
    .then(res=>{
        return res.data
    })
    .then(res=>{
        axios.get("http://localhost:3000/fav")
        .then(post=>{
            let like=post.data.find(f=>f.id==res.id)
            if(!like){
                axios.post("http://localhost:3000/fav",res)
                bi.classList.add("bi-heart-fill")
                bi.classList.remove("bi-heart")
            }else{
                axios.delete(`http://localhost:3000/fav/${id}`)
                bi.classList.remove("bi-heart-fill")
                bi.classList.add("bi-heart")

            }
        })
    })
}