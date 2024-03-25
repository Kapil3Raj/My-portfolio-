// menu
const stumps = document.getElementById("menucont");
stumps.addEventListener("click", () => {
    const bail1 = document.querySelector(".spn1");
    bail1.classList.toggle("left_bail");
    const bail2 = document.querySelector(".spn2");
    bail2.classList.toggle("right_bail");
    const stump1 = document.querySelector(".spn3");
    stump1.classList.toggle("middle_stump");
    const stump2 = document.querySelector(".spn4");
    stump2.classList.toggle("right_stump");
    const hmenu = document.querySelector(".navbar1");
    hmenu.classList.toggle("navbar2");
    

});



//about section switch


const switch_img1 = document.querySelector(".abtcon1 > img");
const switch_img2 = document.querySelector(".abtcon2 > img");

switch_img1.addEventListener("click", () => {
    const text = document.querySelectorAll(".abttext")[0];

    if (switch_img1.getAttribute("src") !== "./Img/switch_on.svg") {
        switch_img1.setAttribute("src", "./Img/switch_on.svg");
    } else {
        switch_img1.setAttribute("src", "./Img/switch_off.svg");
    }

    let audio = new Audio("Audio/switch_click.mp3");
    audio.play();

    text.classList.toggle("glow");
});

switch_img2.addEventListener("click", () => {
    const text = document.querySelectorAll(".abttext")[1];

    if (switch_img2.getAttribute("src") !== "./Img/switch_on.svg") {
        switch_img2.setAttribute("src", "./Img/switch_on.svg");
    } else {
        switch_img2.setAttribute("src", "./Img/switch_off.svg");
    }

    let audio = new Audio("Audio/switch_click.mp3");
    audio.play();

    text.classList.toggle("glow");
});




