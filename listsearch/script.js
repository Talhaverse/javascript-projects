//look at the amount of vars we r gonna need

// we r going to loop through all the items and look all the items

// we r gonna need a function as well 

const input = document.getElementById("search");

input.addEventListener("keyup", search);

function search() {
    const inputValue = input.value;
    const li = document.getElementsByTagName("li");

    for(i = 0; i < li.length; i++ ){
        if(li[i].innerHTML.toLowerCase().includes(inputValue)){
            li[i].style.display="";
        }
        else{
            li[i].style.display = "none"
        }
 }


}

