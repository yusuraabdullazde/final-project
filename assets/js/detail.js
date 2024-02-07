let id =new URLSearchParams(window.location.search).get("id")
const cardInfo = document.querySelector(".card-information")

function Detail() {
   fetch(`http://localhost:3000/detail/${id}`)
    .then(res=>res.json())
    .then(element => {
            cardInfo.innerHTML +=`
            <div class="info">
            <span>${element.name}</span>
            <p>
                The ageing of the population, technological advances, new public health threats, evolving
                patients expectations and shrinking budget are putting under pressure health care systems in
                Europe and beyond. An increasing portion of health care expenditure is on pharmaceutical and
                chronic diseases. All these factors are pushing for change. And community pharmacy is changing
                too to respond to these challenges and meet patients’ needs by shifting the focus from
                dispensing medicines and diseases to patient care and quality of services.</p>
            <div class="sekil2">
                <img src="${element.image}" alt="">
            </div>
            <p>${element.info1}</p>
            <ul>
                <li> • Better quality of care</li>
                <li> • Better health outcome</li>
                <li> • Lower costs</li>
            </ul>

            <p>${element.info2}</p>

            <p>Core pharmacy services are:</p>
            <ul>
                <li> • Dispensing (incl. repeat dispensing and homecare);</li>
                <li>• Compounding;</li>
                <li>• Emergency care (incl. emergency contraception) and minor ailment management.</li>
                <li>• Medication management (unit dose packaging, new medicines service, medicines use review);
                </li>
            </ul>

            <p>${element.info3}</p>
            <ul>
                <li> • Vaccination;</li>
                <li> • Smoking cessation;</li>
                <li>• Measurement of blood pressure, cholesterol, glucose, weight,</li>
                <li>• Chronic disease management;</li>
                <li>• Early screening and testing.</li>
            </ul>
         </div>`
         });
    }                                                                                                                                                            
Detail()