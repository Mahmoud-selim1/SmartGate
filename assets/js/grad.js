let main =document.getElementById("main");
let logOut = document.getElementById("logOut")
let goToMain=()=> {
    window.location.href='./index.html'
}
main.addEventListener("click",goToMain);
logOut.addEventListener("click",goToMain)