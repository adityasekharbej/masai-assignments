//here retrieve the generated number from Localstorage.
var num = JSON.parse(localStorage.getItem("number"));

    var div = document.getElementById("show_number");
    div.innerText = num;
    if(num == 6){
        div.style.color = "green";
    }else if(num == 1){
        div.style.color = "yellow";
    }else{
        div.style.color = "red";
    }
