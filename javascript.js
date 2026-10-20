
/* 1. WELCOME MESSAGE */
console.log("Welcome to Buony James's portfolio!");

/* 2. ADD A THEME TOGGLE BUTTON */
const themeButton = document.createElement("button");

themeButton.textContent = "Change Theme";
themeButton.id = "theme-button";

themeButton.style.padding = "10px 15px";
themeButton.style.marginTop = "15px";
themeButton.style.background = "#54a8ff";
themeButton.style.color = "#07111f";
themeButton.style.border = "none";
themeButton.style.borderRadius = "7px";
themeButton.style.cursor = "pointer";

document.querySelector("header").appendChild(themeButton);

let darkMode = true;

themeButton.addEventListener("click", function () {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.style.background = "#07111f";
        document.body.style.color = "#f1f6ff";
        themeButton.textContent = "Change Theme";
    } else {
        document.body.style.background = "#eaf3ff";
        document.body.style.color = "#102238";
        themeButton.textContent = "Return to Dark Theme";
    }
});

/* 3. ADD AN ABOUT-ME BUTTON */
const aboutSection = document.querySelector("#about");

if (aboutSection) {
    const aboutButton = document.createElement("button");
    aboutButton.textContent = "Show More About Me";

    aboutButton.style.padding = "10px 15px";
    aboutButton.style.marginTop = "15px";
    aboutButton.style.background = "#54a8ff";
    aboutButton.style.border = "none";
    aboutButton.style.borderRadius = "7px";
    aboutButton.style.cursor = "pointer";

    const extraInfo = document.createElement("p");

    extraInfo.textContent =
        "I am improving my programming skills through practice, " +
        "personal projects, and continuous learning.";

    extraInfo.hidden = true;
    extraInfo.style.marginTop = "15px";

    aboutSection.appendChild(aboutButton);
    aboutSection.appendChild(extraInfo);

    aboutButton.addEventListener("click", function () {
        extraInfo.hidden = !extraInfo.hidden;

        aboutButton.textContent = extraInfo.hidden
            ? "Show More About Me"
            : "Show Less";
    });
}

/* 4. UPDATE THE FOOTER YEAR */
const footer = document.querySelector("footer");

if (footer) {
    const year = new Date().getFullYear();

    footer.innerHTML +=
        "<p>Portfolio year: " + year + "</p>";
}
