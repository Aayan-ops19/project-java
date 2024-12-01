

document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const refuseButton = document.getElementById("weigeren-cookies");

    // Controleer of cookies al zijn geaccepteerd
    //if (localStorage.removeItem("cookiesAccepted") === "true") {
    // deze gaan we gebruiken voor als je die cookies melding terug wilt na weghalen
    if (localStorage.removeItem("cookiesAccepted") === "true") {
        console.log("Cookies zijn al geaccepteerd.");
        cookieBanner.style.display = "none";
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        console.log("Cookies zijn geaccepteerd.");
        cookieBanner.style.display = "none";
    });

    refuseButton.addEventListener("click", function () {
        console.log("Cookies zijn geweigerd.");
        cookieBanner.style.display = "none";
    });
});

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    // Verander de knoptekst afhankelijk van de modus
    let button = document.querySelector("button[onclick='myFunction()']");
    if (element.classList.contains("dark-mode")) {
        button.textContent = "Light";
        console.log("Dark mode ingeschakeld");
    } else {
        button.textContent = "Dark";
        console.log("Light mode ingeschakeld");
    }
}
