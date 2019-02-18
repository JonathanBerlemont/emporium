export function setModal() {
    /*
    ______________________
    |                    |
    |Modal de connection |
    |____________________|
    
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
        
        //Empeche de cliquer sur le bouton connexion à nouveau tant que le modal est ouvert
        connection_button.setAttribute("disabled","");
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
            
            //Réactive le bouton de connexion
            connection_button.removeAttribute("disabled","");
            
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
    _____________________________
    |                           |
    |Fin du modal de connection |
    |___________________________|
    
    */
}