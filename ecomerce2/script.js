

window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle
    ("window-scroll",window.scrollY>0)
})

// show and hide faq

const faqs=document.querySelectorAll(".faq");
faqs.forEach((e)=>{
e.addEventListener("click",()=>{
    e.classList.toggle("open")
    const icon=e.querySelector(".faq_icon i")
    console.log(icon);
    if(icon.className==="fa-solid fa-plus"){
        icon.className="fa-solid fa-minus";
    }else{
        icon.className="fa-solid fa-plus";
    }
})
})

const menu=document.querySelector(".nav_menu");
const openbtn=document.querySelector("#open-menu-btn");
const closebtn=document.querySelector("#close-menu-btn");

openbtn.addEventListener("click",()=>{
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    openbtn.style.display="none";
})

const close =function(){
    menu.style.display="none";
    closebtn.style.display="none";
    openbtn.style.display="inline-block";
}
closebtn.addEventListener("click",close);