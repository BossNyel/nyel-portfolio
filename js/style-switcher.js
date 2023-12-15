/* toggle style switcher */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Function to close the style switcher
function closeStyleSwitcher() {
    document.querySelector(".style-switcher").classList.remove("open");
}

// Function to check scroll position and close style switcher if scrolled beyond a certain limit
function checkScrollAndClose() {
    const scrollLimit = 100; 
    if (window.scrollY > scrollLimit) {
        closeStyleSwitcher();
    }
}

// hide style-switcher on scroll
window.addEventListener("scroll", checkScrollAndClose);

/* theme colors */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });

    // Close the style switcher after selecting a section
    closeStyleSwitcher();
}

/* theme light and dark mode */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("light");

    closeStyleSwitcher();
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("light")) {
        dayNight.querySelector("i").classList.add("fa-moon");
    } else {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
});

/* aside links */
const asideLinks = document.querySelectorAll(".aside .nav li a");
asideLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // Close the style switcher when choosing an aside link
        closeStyleSwitcher();
    });
});

/* sections with scroll listeners */
const sectionsWithScrollListener = document.querySelectorAll(".about, .portfolio, .contact");

sectionsWithScrollListener.forEach((section) => {
    section.addEventListener("scroll", () => {
        // Close the style switcher when scrolling in the specified sections
        closeStyleSwitcher();
    });
});

/* more about me links in home section */
const moreAboutMeLinks = document.querySelectorAll(".home .about-me");
moreAboutMeLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // Close the style switcher when clicking on "More about me" links in the home section
        closeStyleSwitcher();
    });
});

/* more about me links in home section */
const hiretMeLink = document.querySelectorAll(".about .hire-me");
hiretMeLink.forEach((link) => {
    link.addEventListener("click", () => {
        // Close the style switcher when clicking on "Hire me" links in the home section
        closeStyleSwitcher();
    });
});

const dlMeLink = document.querySelectorAll(".about .dl-me");
dlMeLink.forEach((link) => {
    link.addEventListener("click", () => {
        // Close the style switcher when clicking on "Download Cv" links in the home section
        closeStyleSwitcher();
    });
});

