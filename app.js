const toggleCheckbox = document.getElementById("checkbox");
const htmlElement = document.documentElement;

// Check LocalStorage or System Preference on Page Load
const currentTheme = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-theme", currentTheme);

if (currentTheme === "dark") {
    toggleCheckbox.checked = true;
}

// Listen for toggle switch changes
toggleCheckbox.addEventListener("change", function () {
    if (this.checked) {
        htmlElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        htmlElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
});