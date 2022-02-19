const btn = document.querySelector(".btn")
const error = document.querySelector(".error")
const tip = document.querySelector(".tip")
const total = document.querySelector(".total")

btn.addEventListener("click",calculateTip)

//function to hide error

function hideError(){
    setTimeout(()=>{
        error.style.display = "none"
    },3000 )

}
// main function
const tip = document.querySelector(".tip")
const bill = document.querySelector(".bill").value
console.log(bill)
const rate = document.querySelector(".rate").value
console.log(rate)

if (bill ==="" || rate ==""){
error.style.display = "block"
hideError()
}
else if (isNaN(bill)) {
 error.innerHTML = "Please enter a Number!"
 error.style.display = "block"
 hideError()
}

else{
    let tipAmount = Math.round(bill*rate)
    tip.innerHTML = `Total Amount: ${tipAmount}`
    let totalBill = Number(bill) + tipAmount
    total.innerHTML = `Total Amount: ${totalBill}`
}


