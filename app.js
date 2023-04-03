const aboutMe = document.querySelector(".abt");
const projects = document.querySelector(".proj");
const contact = document.querySelector(".cont");
const myName = document.querySelector(".my_name");
const navBar = document.querySelector(".nav");

aboutMe.addEventListener("click", function()
{
    navBar.style = "background:linear-gradient(to right, rgb(103, 1, 1), rgb(165, 81, 2));"
})

projects.addEventListener("click", function(){
    navBar.style = "background:linear-gradient(to right, rgb(49, 2, 49), rgb(233, 43, 233));"
})

contact.addEventListener("click", function(){
    navBar.style = "background: linear-gradient(to right, #00AAFF, #00ff6c); "
})

myName.addEventListener("click", function(){
    navBar.style = "background: linear-gradient(to right, #00AAFF, #00ff6c); "
})