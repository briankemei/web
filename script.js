function toggleMenu(){
    // Targets the element that contains the menu links
    const menu = document.querySelector(".menu-links");

    // Targets the element representing the hamburger icon
    const icon = document.querySelector(".hamburger-icon");

    /*Expanding or collapsing the entire menu container.*/
    menu.classList.toggle("open");// open or remove  the open class
    icon.classList.toggle("open");
    
}