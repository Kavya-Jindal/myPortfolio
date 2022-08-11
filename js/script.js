// navbar
const navToggler = document.querySelector(".navToggler");
navToggler.addEventListener("click",()=>{
    hideSection();
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}