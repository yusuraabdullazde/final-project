const card2 = document.querySelector(".cards")

function favori(){
    fetch("http://localhost:3000/fav")
    .then(res=>res.json())
    .then(data=>{
         data.forEach(elem => {
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
                              <i class="bi bi-trash3" onclick="deletefun(${elem.id})"></i>
                           </div>
                      </div>
                  </div>`
         });
    })
}

favori()

function deletefun(id) {
    console.log("salam");
    axios.delete(`http://localhost:3000/fav/${id}`)
        .then(res => window.location.reload())
}