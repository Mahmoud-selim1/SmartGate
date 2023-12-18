
let model = document.querySelector(".model");

let collageModel = document.querySelector(".collage-model");
// show Model
let showModel = () => {
    model.style.display= 'flex';
};
// Show Collage Model
let showCollageModel=()=> {
    
    model.style.display='none';
    collageModel.style.display= 'flex';
}
// hide Model
let hideModel=()=> {
    model.style.display='none';
    collageModel.style.display= 'none';
};

// Spinner
let spinner = document.querySelector(".spinner")

window.onload=()=> {
    spinner.style.display='none'
}
let goToGrade=()=> {
    window.location.href='./grade.html'
}
let upBtn = document.querySelector(".up-btn")
window.onscroll=()=> {
    let scrollNumber=window.scrollY;
    if(scrollNumber>=400) {
        upBtn.style.display='block'
    }
    else {
        upBtn.style.display='none'
    }
}