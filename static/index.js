const setObj = function (key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function (key) {
    return JSON.parse(localStorage.getItem(key))
}

if (localStorage.getItem("theme")) {
    document.body.setAttribute("theme", localStorage.getItem("theme"))
} else {
    document.body.setAttribute("theme", "main")
}

if (localStorage.getItem("theme")) {
    document.body.setAttribute("theme", localStorage.getItem("theme"))
}
console.log(localStorage.getItem("theme"))

// Function to change the tab title
function changeTabTitle(newTitle) {
    document.title = newTitle;  // Change the title of the current tab
    localStorage.setItem('tabTitle', newTitle);  // Store the tab title in local storage
}

// Function to change the favicon
function changeFavicon(faviconUrl) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = faviconUrl;  // Change the favicon of the current tab
        localStorage.setItem('faviconUrl', faviconUrl);  // Store the favicon URL in local storage
    }
}

// Check if there are stored values for tab title and favicon and apply them
window.onload = function() {
    var storedTitle = localStorage.getItem('tabTitle');
    var storedFaviconUrl = localStorage.getItem('faviconUrl');
    
    if (storedTitle) {
        changeTabTitle(storedTitle);
    }
    
    if (storedFaviconUrl) {
        changeFavicon(storedFaviconUrl);
    }
};
// Function to change the tab title
function changeTabTitle(newTitle) {
    document.title = newTitle;  // Change the title of the current tab
    localStorage.setItem('tabTitle', newTitle);  // Store the tab title in local storage
}

// Function to change the favicon
function changeFavicon(faviconUrl) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = faviconUrl;  // Change the favicon of the current tab
        localStorage.setItem('faviconUrl', faviconUrl);  // Store the favicon URL in local storage
    }
}

// Check if there are stored values for tab title and favicon and apply them
window.onload = function() {
    var storedTitle = localStorage.getItem('tabTitle');
    var storedFaviconUrl = localStorage.getItem('faviconUrl');
    
    if (storedTitle) {
        changeTabTitle(storedTitle);
    }
    
    if (storedFaviconUrl) {
        changeFavicon(storedFaviconUrl);
    }
};

// Function to get the current favicon URL
function getFaviconUrl() {
    var favicon = document.querySelector("link[rel~='icon']");
    return favicon ? favicon.href : '';
}

// Function to update the favicon
function updateFavicon(iconUrl) {
    var link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = iconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
}


