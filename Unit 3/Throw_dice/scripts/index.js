//Store the generated number in LocalStorage with key "number".
document.querySelector("#throw_dice").addEventListener("click", function(){
    let num = Math.floor((Math.random() * 6) + 1);
    localStorage.setItem("number", JSON.stringify(num));
    location.href = "display.html"
})
