const navbarElement=document.querySelector(".navbar");
const bottomContainerElement = document.querySelector(".bottom-container");


window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomContainerElement.offsetTop - navbarElement.offsetHeight){
        navbarElement.classList.add("active");
    }else{
        navbarElement.classList.remove("active");
    }
})