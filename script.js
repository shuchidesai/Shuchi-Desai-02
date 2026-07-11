/* ===========================
   Shuchi Desai Portfolio
   Apple Premium Theme
=========================== */

// Dark / Light Mode

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
    themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
}else{
    themeBtn.innerHTML="☀️";></i>';
}

});

// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hidden=document.querySelectorAll("section,.card,.about-box");

hidden.forEach((el)=>observer.observe(el));


// Smooth Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Hero Typing Effect

const text=[
"Associate Analyst @ CloudLabs",
"QA Engineer",
"Manual Testing",
"SAP",
"Automation Testing"
];

let count=0;
let index=0;
let currentText="";
let letter="";

const typing=document.querySelector(".hero-text h2");

(function type(){

if(count===text.length){

count=0;

}

currentText=text[count];

letter=currentText.slice(0,++index);

typing.textContent=letter;

if(letter.length===currentText.length){

count++;

index=0;

setTimeout(type,1800);

}else{

setTimeout(type,90);

}

})();


// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
