const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#%^&*_+|";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNnumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const password = document.getElementById("password");
const copy = document.getElementById("copy");
const submit = document.getElementById("submit");


const generatePassword = (l, initialPassword) => { //initialPassword wil contain the list of all the character we wanna use
    let pass= "";
    for (let i = 0; i<l; i++) {
      // charAt picks up a letter / element from the array as index specifies
      // a= "vatsal"
      // a.charAt(2) --> returns t
      pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length))
    }
    console.log(pass)
    return pass;
  }



// function generatePassword(l , initialPassword){
//     let pass="";
//     for(let i = 0; i<l; i++){
//         pass+=initialPassword.charAt(Math.floor(Math.random() * initialPassword.length ))
//     }
//     console.log(pass)
//     return pass;
//}

submit.addEventListener("click" , () => {
upperCase.checked ? (initialPassword += uCase): "";
lowerCase.checked ? (initialPassword += lCase): "";
pNnumber.checked ? (initialPassword += number): "";
pSymbol.checked ? (initialPassword += symbol): "";
console.log(initialPassword)
password.value = generatePassword(pLength.value , initialPassword)
})

copy.addEventListener("click", ()=>{
    if(password.value = ""){
        alert("Please Generate Password!!!")
        document.execCommand("copy") ;

    } else {
        password.select()
        alert("Password Copied To Clipboard !!! ")
    }


} )
