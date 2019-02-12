/*
Modal de connection
*/
let modal = document.getElementById("modal");
let connection_button = modal.parentElement.getElementsByTagName("button")[0];

let switch_button = document.getElementsByClassName("switch");
let div_connection = document.getElementById("connection");
let div_inscription = document.getElementById("inscription");

//Affichage du modal
connection_button.addEventListener("click", () => {
    modal.classList.remove("d-none");
})

//Fonctionalité du close button
let close_button = modal.getElementsByTagName("span")[0];
close_button.addEventListener("click", () => {
    modal.classList.add("d-none");
})

//switch entre connection et inscription
for (let i = 0; i<switch_button.length; i++){
    switch_button[i].addEventListener("click", () => {        
        div_connection.classList.toggle("d-none");
        div_inscription.classList.toggle("d-none");
    })
}

/*
Fin du modal de connection
*/




/*
Changement entre dark mode et light mode
*/
let dark_mode = document.getElementById("dark-mode");
let light_mode = document.getElementById("light-mode");
let navbar = document.getElementsByTagName("nav")[0];
let navbar_h1 = document.querySelector("h1");


dark_mode.addEventListener("click", () => {
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-light");
    navbar_h1.classList.remove("bg-light");
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-dark");
    navbar_h1.classList.add("bg-dark");
    navbar_h1.style.color = "white";
})

light_mode.addEventListener("click", () => {
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("bg-dark");
    navbar_h1.classList.remove("bg-dark");
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-light");
    navbar_h1.classList.add("bg-light");
    navbar_h1.style.color = "black";
})