let logo = document.querySelector(".logo");
let hamburgerMenuInput = document.getElementById("hamburger");
    hamburgerMenuInput.addEventListener("change", function(){ 
        logo.style.marginTop = hamburgerMenuInput.checked ? "-9rem" : "0rem";
});
