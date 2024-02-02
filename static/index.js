const setObj = function (key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function (key) {
    return JSON.parse(localStorage.getItem(key))
}

if (localStorage.getItem("launchblank") && window.self !== window.top) {
    launchab()
}

function launchab() {
    const tab = window.open('about:blank', '_blank');
    const iframe = tab.document.createElement('iframe');
    const stl = iframe.style;
    stl.border = stl.outline = 'none';
    stl.width = '100vw';
    stl.height = '100vh';
    stl.position = 'fixed';
    stl.left = stl.right = stl.top = stl.bottom = '0';
    iframe.src = self.location;
    tab.document.body.appendChild(iframe);
    window.parent.window.location.replace(localStorage.getItem("panicurl") || 'https://classroom.google.com/h')
}

if (window.self !== window.self) document.querySelector("#launchab").style.display = "none"

if (localStorage.getItem("theme")) {
    document.body.setAttribute("theme", localStorage.getItem("theme"))
} else {
    document.body.setAttribute("theme", "main")
}
if (localStorage.getItem("tabIcon")) {
    document.querySelector("link[rel='shortcut icon']").href = localStorage.getItem("tabIcon")
}

if (localStorage.getItem("tabName")) {
    document.title = localStorage.getItem("tabName")
}

if (localStorage.getItem("theme")) {
    document.body.setAttribute("theme", localStorage.getItem("theme"))
}
console.log(localStorage.getItem("theme"))

