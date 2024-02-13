const card2 = document.querySelector(".cards")
function myCard() {
    fetch('http://localhost:3000/card')
        .then(res => res.json())
        .then(data => {
            data.forEach(elem => {
                card2.innerHTML += `
                <div class="card">
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