export function setScroll() {
    /*
    ____________________________________________
    |                                          |
    |Changement de la navbar pendant le scroll |
    |__________________________________________|
    
    */

    let body = document.getElementsByTagName("body")[0];
    let nav = document.getElementById("navbar");
    let section_top = document.getElementById("section-baner");
    
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
            
        } else {
            //quand on veut cacher la navbar
            body.style.overflow = "";
            navbar_content.classList.remove("getIn");
            navbar_content.classList.add("getOut");
            burger.firstChild.className = "fas fa-angle-double-right";
            
            setTimeout(() => {
                navbar_content.classList.remove("getOut");
            }, 1000);
        }
        
    })
}