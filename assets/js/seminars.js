let regist = document.querySelector("#signNow1");
let register = document.querySelector(".register");
let accept = document.querySelector(".accept")
// show register model
let showRegisterModel=()=> {
    register.style.display='flex';
};
regist.addEventListener("click",showRegisterModel);
// hide register model
let hideRegisterModel=()=> {
    register.style.display='none';
}
// show accept model
let showAcceptModel=()=> {
    register.style.display='none';
    accept.style.display='flex';
}; 
// hide accept model
let hideAcceptModel=()=> {
    accept.style.display='none';
}; 