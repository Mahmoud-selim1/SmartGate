let signBtn = document.getElementById("signBtn");
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
signBtn.addEventListener("click",showModel);

    let gradeBtn = document.getElementById("gradeBtn");
    gradeBtn.addEventListener("click",showModel);



