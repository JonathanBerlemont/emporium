/*
--------------------------------------------------------------
Modal de connection
--------------------------------------------------------------
*/
let modal = document.getElementById("modal");
let connection_button = document.querySelector("nav button");

let switch_button = document.getElementsByClassName("switch");
let div_connection = document.getElementById("connection");
let div_inscription = document.getElementById("inscription");
let body = document.getElementsByTagName("body")[0];

let modal_inputs = [...modal.getElementsByTagName("input")];

//Affichage du modal
connection_button.addEventListener("click", () => {
    let first_input = modal.getElementsByTagName("input")[0];
    modal.classList.remove("d-none");

    first_input.focus();

    //rajoute un effet à l'apparition
    modal.classList.add("popIn");
    
    //Crée un assombrissement du background pendant que le modal est ouvert
    let blackness = document.createElement("div");
    blackness.style.height = "150vh";
    blackness.style.width = "100%";
    blackness.style.position = "fixed";
    blackness.style.top = "0";
    blackness.style.zIndex = "9";
    blackness.style.backgroundColor = "black";
    blackness.style.opacity = ".7";

    body.insertBefore(blackness, body.firstChild);
    //Empeche le scroll pendant que le modal est ouvert
    body.style.overflow = "hidden";
    
    
})

//Fonctionalité du close button
let close_button = document.getElementById("close-button");
close_button.addEventListener("click", () => {
    //rajoute un effet avant de disparaitre
    modal.classList.add("popOut");

    setTimeout( () => {
        modal.classList.add("d-none");

        //eneleve les effets pour qu'ils puissent etre réutilisés après
        modal.classList.remove("popIn");
        modal.classList.remove("popOut");

        //enleve le background assombri
        body.removeChild(body.firstChild);
        //reactive le scrolling de la page
        body.style.overflow = "";

        if (!div_inscription.classList.contains("d-none")){
            div_inscription.classList.add("d-none");
            div_connection.classList.remove("d-none");
        }

        modal_inputs.forEach((element) => {
            element.value = "";
        })

    }, 300)

})

//switch entre connection et inscription
for (let i = 0; i<switch_button.length; i++){
    switch_button[i].addEventListener("click", () => {        
        div_connection.classList.toggle("d-none");
        div_inscription.classList.toggle("d-none");
    })
}

/*
--------------------------------------------------------------
Fin du modal de connection
--------------------------------------------------------------
*/




/*
--------------------------------------------------------------
Changement entre dark mode et light mode
--------------------------------------------------------------
*/
let dark_mode = document.getElementById("dark-mode");
let light_mode = document.getElementById("light-mode");
let navbar = document.getElementsByTagName("nav")[0];
let navbar_h1 = document.getElementById("navbar-h1");


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
/*
--------------------------------------------------------------
Fin du changement entre dark mode et light mode
--------------------------------------------------------------
*/





/*
--------------------------------------------------------------
Changement de la navbar pendant le scroll
--------------------------------------------------------------
*/

let nav = document.getElementById("navbar");
let section_top = document.getElementById("section-top");
let added_padding = nav.clientHeight;

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
        nav.classList.add("navbar-scroll");
        section_top.style.paddingTop = added_padding+ "px";

    } else {
        nav.classList.remove("navbar-scroll");
        section_top.style.paddingTop = 0;
    }
})

/*
--------------------------------------------------------------
Fin changement de la navbar pendant le scroll
--------------------------------------------------------------
*/