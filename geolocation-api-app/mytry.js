const myLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

btn.addEventListener("click" , ()=>{
    navigator.geolocation.getCurrentPosition(myPosition);
})

function myPosition(position) {
        myLocation.innerHTML = `
    Latitude: ${position.coords.latitude} <br>
    Longitude: ${position.coords.longitude}


`;

}