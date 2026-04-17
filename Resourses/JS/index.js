//Buttons
const buttonSoft = document.getElementById("software");
const buttonGame = document.getElementById("design");
const buttonAll = document.getElementById("all");

//MainScreens
const mainIntro = document.getElementById("introduction");
const webSite = document.getElementById("portfolio");

//Sections
const navigation = document.getElementById("navigation");
const softwareDevSec = document.getElementById("softwaredev");
const gameDesignSec = document.getElementById("gamedesign");
const allSec = document.getElementById("allsec");


function hideAllSections() {
    navigation.classList.add("hidden");
    softwareDevSec.classList.add("hidden");
    gameDesignSec.classList.add("hidden");
    allSec.classList.add("hidden");
}

function changeSection(event) {
    const clickedId = event.currentTarget.id;

    mainIntro.classList.add("fadeOut");

    setTimeout(() => {
        mainIntro.classList.add("hidden");
        mainIntro.classList.remove("fadeOut");

        webSite.classList.remove("hidden");
        webSite.classList.add("fadeIn");

        hideAllSections();
        navigation.classList.remove("hidden");

        if (clickedId === "software") {
            softwareDevSec.classList.remove("hidden");
        } else if (clickedId === "design") {
            gameDesignSec.classList.remove("hidden");
        } else if (clickedId === "all") {
            allSec.classList.remove("hidden");
        }
    }, 800);
}

buttonSoft.addEventListener("click", changeSection);
buttonGame.addEventListener("click", changeSection);
buttonAll.addEventListener("click", changeSection);