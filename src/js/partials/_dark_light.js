export function setDarkLight() {
    /*
    ___________________________________________
    |                                         |
    |Changement entre dark mode et light mode |
    |_________________________________________|
    
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
    __________________________________________________
    |                                                |
    |Fin du changement entre dark mode et light mode |
    |________________________________________________|
    
    */
}