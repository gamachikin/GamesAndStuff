function setTheme(theme) {
    document.body.setAttribute("theme", theme)
    localStorage.setItem("theme", theme)
}

function setTab(name = document.querySelector('#tabname').value, icon = document.querySelector("#tabicon").value) {
    localStorage.setItem("tabName", name)
    localStorage.setItem("tabIcon", icon)

    document.title = name
    document.querySelector("link[rel='shortcut icon']").href = icon
    if (localStorage.getItem("tabName")) document.querySelector("#tabname").value = localStorage.getItem("tabName")
    if (localStorage.getItem("tabIcon")) document.querySelector("#tabicon").value = localStorage.getItem("tabIcon")

}
function setTabPreset(tab) {

    setTab(tabPresets[tab].name, tabPresets[tab].icon)

}

if (localStorage.getItem("tabName")) document.querySelector("#tabname").value = localStorage.getItem("tabName")
if (localStorage.getItem("tabIcon")) document.querySelector("#tabicon").value = localStorage.getItem("tabIcon")
if (localStorage.getItem("theme")) document.querySelector("#theme-select").value = localStorage.getItem("theme")

const themeSelect = document.getElementById('theme-select');

themeSelect.addEventListener('change', () => {
    document.body.setAttribute('theme', themeSelect.value);
    localStorage.setItem("theme", themeSelect.value)
});

if (localStorage.getItem("panickey")) document.querySelector("#panickey").value = localStorage.getItem("panickey")
if (localStorage.getItem("panicurl")) document.querySelector("#panicurl").value = localStorage.getItem("panicurl")
  
  
  