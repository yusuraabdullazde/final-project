const id=new URLSearchParams(window.location.search).get("id")
const detailcard=document.querySelector("#dr-img-detail")
function detailCard(){
    fetch(`http://localhost:3000/drdetail/${id}`)
    .then(res=>res.json())
    .then(el=>{
            detailcard.innerHTML+=`
            <div class="dtl">
            <div class="detail-img">
                <img src="${el.image}" alt="">
              </div>
              <div class="detail-info">
                <h2>${el.name}</h2>
                <h3>${el.profession}</h3>
                <p>${el.info1}</p>
                <a href="#">Make</a>
                <h3>Areas of Expertise</h3>

                <div id="item">
                <div class="item">
                    <i class="bi bi-check-lg"></i>
                    <p>Preventive Cardiology</p>
                </div>
                <div class="item">
                    <i class="bi bi-check-lg"></i>
                    <p>Preventive Cardiology</p>
                </div>
                <div class="item">
                    <i class="bi bi-check-lg"></i>
                    <p>Cardiac Rehabilitation</p>
                </div>
                <div class="item">
                    <i class="bi bi-check-lg"></i>
                    <p>Cardiac Rehabilitation</p>
                </div>
                <div class="item">
                    <i class="bi bi-check-lg"></i>
                    <p>Hypertension Management</p>
                </div>
                <div class="item">
                    <i class="bi bi-check-lg"></i>
                    <p>Hypertension Management</p>
                </div>
            </div>
              </div>
        </div>`
        })
    }
detailCard()