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
                        <i class="bi bi-facebook"></i>
                        <a href="./doctordetail.html?id=${element.id}">
                        <i class="bi bi-info-circle"></i>
                        </a>
                        <i class="bi bi-twitter"></i>
                    </div>
                        <span>${element.name}</span>
                        <p>${element.pese}</p>
                    </div> `
            })
        })
}

doctorCard()


