function cnty(){
let url = "https://restcountries.eu/rest/v2/all";
const mainmain = document.querySelector("#mainmain")
fetch(url)
.then((response)=>{
    return (response.json());
      
}).then((data)=>{

    data.forEach(element => {
        console.log(element);
        const container = document.querySelector(".container");
document.querySelector('body').appendChild(container)

const card =document.createElement("div");
card.className="card"
card.style.width="18rem"
container.appendChild(card)


const cardtitle= document.createElement("h5");
cardtitle.className="card-title";
card.appendChild(cardtitle)
cardtitle.style.textAlign="center"
cardtitle.innerHTML=element.name


const cardiimage = document.createElement("img");
cardiimage.className="card-img-top";
card.appendChild(cardiimage);
cardiimage.setAttribute("src" , element.flag)

const cardbody = document.createElement("div");
cardbody.className="card-body"
card.appendChild(cardbody)

const cardtextcapital= document.createElement("h6");
cardtextcapital.className="card-text";
cardbody.appendChild(cardtextcapital)
cardtextcapital.style.textAlign="center"
cardtextcapital.innerHTML= "Capital :" + " "  + element.capital

const cardtextregion= document.createElement("h6");
cardtextregion.className="card-text";
cardbody.appendChild(cardtextregion)
cardtextregion.style.textAlign="center"
cardtextregion.innerHTML= "Region :" + " "  + element.region;

const cardtextcode= document.createElement("h6");
cardtextcode.className="card-text";
cardbody.appendChild(cardtextcode)
cardtextcode.style.textAlign="center"
cardtextcode.innerHTML= "County Codes :" + " "  + element.alpha3Code;

const cardtextlatlng= document.createElement("h6");
cardtextlatlng.className="card-text";
cardbody.appendChild(cardtextlatlng)
cardtextlatlng.style.textAlign="center"
cardtextlatlng.innerHTML= "latlng :" + " "  + element.latlng;




const cardbtn = document.createElement("button");
cardbtn.className="btn";
cardbtn.innerHTML="click to get wheather"
card.appendChild(cardbtn);


let a = "https://api.openweathermap.org/img/wn/${iconCode}@2x.png"

cardbtn.addEventListener('click',
function (){

  let apiUrl ="https://api.openweathermap.org/data/2.5/find?lat=" + element.latlng[0] + "&lon=" + element.latlng[1]+ "&cnt=" + "&appid=7d02f19d2d5e7392ebbee8be930adf59"
  console.log(element.latlng[0],element.latlng[1]);


  fetch(apiUrl)
  .then((data)=>{
    return (data.json() );
  }).then((res)=>{
    console.log(res);

    res.list.forEach((d) => {
      console.log(d);
    
    
      cardbtn.innerHTML=   `
      
      <!-- Button trigger modal -->
 <button type="button" class="btn btn-dark btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal">
click agian </button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Wheather Report</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5 class="model-text"> Country: ${element.name}</h5>
        <h5 class="model-text"> Temprature: ${Math.floor(d.main.temp-270).toFixed(2)+"°C"}</h5>
        <img   src=${a} alt="">
       
        

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
      
      
      `
     
 
    });
  })
  
  
  .catch((error)=>{
    console.log(error);
  })


}

)

   
    });


   

}) .catch((err)=>{
    console.log(err);
})

}


cnty()







