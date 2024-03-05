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
  
// Function to change the tab title
function changeTabTitle(newTitle) {
    document.title = newTitle;  // Change the title of the current tab
    document.cookie = `tabTitle=${newTitle}; path=/`;  // Store the tab title in a cookie
}

// Function to change the favicon
function changeFavicon(faviconUrl) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = faviconUrl;  // Change the favicon of the current tab
        document.cookie = `faviconUrl=${faviconUrl}; path=/`;  // Store the favicon URL in a cookie
    }
}

// Check if there are stored values for tab title and favicon and apply them
window.onload = function() {
    var cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name === 'tabTitle') {
            changeTabTitle(value);
        } else if (name === 'faviconUrl') {
            changeFavicon(value);
        }
    });
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
  
// Function to change the tab title
function changeTabTitle(newTitle) {
    document.title = newTitle;  // Change the title of the current tab
    try {
        localStorage.setItem('tabTitle', newTitle);  // Store the tab title in local storage
    } catch (error) {
        console.error('Error storing tab title in local storage:', error);
    }
}

// Function to change the favicon
function changeFavicon(faviconUrl) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = faviconUrl;  // Change the favicon of the current tab
        try {
            localStorage.setItem('faviconUrl', faviconUrl);  // Store the favicon URL in local storage
        } catch (error) {
            console.error('Error storing favicon URL in local storage:', error);
        }
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
