function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// animaciones
const elements=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
elements.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("visible");
}
});
});

// menú móvil
const toggle=document.getElementById("menu-toggle");
const nav=document.getElementById("nav");

toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});

