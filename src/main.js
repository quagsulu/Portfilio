import HomePage from "./pages/HomePage";
// import HomePage from "./pages/HomePage";
// import HomePage from "./pages/HomePage";
// import HomePage from "./pages/HomePage";
// import HomePage from "./pages/HomePage"; 

const app = document.querySelector("#app");


app.innerHTML = HomePage();
var typed = new Typed(".typing", {
    strings:["Student", "Web Developer", "A Man", "Ahihi"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true 
}  );
console.log(1);


// // == toggler style switcher
const styleSwitcherToggle  = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switcher scroll 
window.addEventListener('scroll',() => {
    if(document.querySelector('.style-switcher').classList.contains("open")) {
    document.querySelector('.style-switcher').classList.remove("open");
    }
});

// 
const alternate = document.querySelectorAll(".alternate-style");
const colorweb = document.querySelectorAll("#color-web");
// function setActiveStyle(color) {
//     alternate.forEach((style) => {
//         if(color == style.getAttribute("title")) {
//             style.removeAttribute("disabled");
//         }
//         else {
//             style.setAttribute("disabled", "true");
//         }
//     })
// }
colorweb.forEach((color) => {
    color.addEventListener("click",() => {

        alternate.forEach((style) => {
            if(color.getAttribute("class") == style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } 
            else {
                style.setAttribute("disabled", "true");
            }
        })
    });

})
// test 
// console.log(document.querySelector("#app").getAttribute('class') == document.querySelector("#app").getAttribute('title')); 

//  dark style and light style switcher
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
     document.body.classList.toggle("dark");
});
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector('i').classList.add("fa-sun");
    } else {
        dayNight.querySelector('i').classList.add("fa-moon");
    }
});