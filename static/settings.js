function setTheme(theme) {
    document.body.setAttribute("theme", theme)
    localStorage.setItem("theme", theme)
}
if (localStorage.getItem("theme")) document.querySelector("#theme-select").value = localStorage.getItem("theme")

const themeSelect = document.getElementById('theme-select');

themeSelect.addEventListener('change', () => {
    document.body.setAttribute('theme', themeSelect.value);
    localStorage.setItem("theme", themeSelect.value)
});
