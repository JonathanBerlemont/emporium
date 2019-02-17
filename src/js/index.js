/*
|--------------------|
|Modal de connection |
|--------------------|
*/
let modal = document.getElementById("modal");
let connection_button = document.querySelector("nav button");

let switch_button = document.getElementsByClassName("switch");
let div_connection = document.getElementById("connection");
let div_inscription = document.getElementById("inscription");
let body = document.getElementsByTagName("body")[0];

let modal_inputs = [...modal.getElementsByTagName("input")];

connection_button.addEventListener("click", () => {
    let first_input = modal.getElementsByTagName("input")[0];
    
    //Affichage du modal
    modal.classList.remove("d-none");
    
    //met le focus sur le premier input du modal, pour eviter d'appuyer sur "enter" apres avoir cliquer sur le bouton connexion et de créer un nombre indésirable de div "blackness"
    first_input.focus();
    
    //rajoute un effet à l'apparition
    modal.classList.add("popIn");
    
    //Crée un assombrissement du background pendant que le modal est ouvert
    let blackness = document.createElement("div");
    blackness.style.height = "150vh";
    blackness.style.width = "100%";
    blackness.style.position = "fixed";
    blackness.style.top = "0";
    blackness.style.zIndex = "10";
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
    
    //le timeout sert à avoir le temps de voir l'animation avant que la div ne disparaisse
    setTimeout( () => {
        modal.classList.add("d-none");
        
        //enleve les effets pour qu'ils puissent etre réutilisés après
        modal.classList.remove("popIn");
        modal.classList.remove("popOut");
        
        //enleve le background assombri
        body.removeChild(body.firstChild);
        
        //reactive le scrolling de la page
        body.style.overflow = "";
        
        //fait en sorte que lorsque l'on quitte le modal depuis l'inscription et qu'on re-ouvre le modal, on soit sur l'onglet connexion
        if (!div_inscription.classList.contains("d-none")){
            div_inscription.classList.add("d-none");
            div_connection.classList.remove("d-none");
        }
        
        //vide les input après fermeture du modal
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
|---------------------------|
|Fin du modal de connection |
|---------------------------|
*/




/*
|-----------------------------------------|
|Changement entre dark mode et light mode |
|-----------------------------------------|
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
|------------------------------------------------|
|Fin du changement entre dark mode et light mode |
|------------------------------------------------|
*/





/*
|------------------------------------------|
|Changement de la navbar pendant le scroll |
|------------------------------------------|
*/

let nav = document.getElementById("navbar");
let section_top = document.getElementById("section-top");

//rajout de padding à la transformation de la navbar pour eviter que la page ne remonte brusquement
let nav_height = nav.clientHeight;

let burger = document.getElementById("burger");
let navbar_content = document.getElementsByTagName("nav")[0];

section_top.style.paddingTop = nav_height+ "px";

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > nav_height) {
        nav.classList.add("navbar-scroll");
        
    } else {
        nav.classList.remove("navbar-scroll");
    }
})

//Apparition du contenu de la navbar
burger.addEventListener("click", () => {
    navbar_content.classList.toggle("shown");
    
    if(navbar_content.classList.contains("shown")){
        //quand on veut montrer la navbar
        navbar_content.classList.remove("getOut");
        navbar_content.classList.add("getIn");
        burger.firstChild.className = "fas fa-angle-double-left";
        
        //Crée un assombrissement du background pendant que le menu est ouvert
        let blackness = document.createElement("div");
        blackness.style.height = "150vh";
        blackness.style.width = "100%";
        blackness.style.position = "fixed";
        blackness.style.top = "0";
        blackness.style.zIndex = "10";
        blackness.style.backgroundColor = "black";
        blackness.style.opacity = ".7";
        body.insertBefore(blackness, body.firstChild);
        
        //Empeche le scroll pendant que le menu est ouvert
        body.style.overflow = "hidden";
        
    } else {
        //quand on veut cacher la navbar
        body.removeChild(body.firstChild);
        body.style.overflow = "";
        navbar_content.classList.remove("getIn");
        navbar_content.classList.add("getOut");
        burger.firstChild.className = "fas fa-angle-double-right";

        setTimeout(() => {
            navbar_content.classList.remove("getOut");
        }, 1000);
    }
    
})

/*
________________________________________________
|                                              |
|Fin changement de la navbar pendant le scroll |
|______________________________________________|

*/