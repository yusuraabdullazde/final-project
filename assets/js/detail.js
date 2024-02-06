let id =new URLSearchParams(window.location.search).get("id")
const card = document.querySelector(".card-element")

function Detail() {
   fetch(`http://localhost:3000/api/${id}`)
    .then(res=>res.json())
    .then(element => {
            card.innerHTML +=`
            <div class="item">
            <div class="card-img">
              <img src="${element.image}" alt="">
            </div>
            <h3>${element.first_name}</h3>
            <p>${element.last_name}.</p>
            <a href="./index.html">Close</a>
        </div>`
         });
    }                                                                                                                                                            
Detail()