const setObj = function (key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function (key) {
    return JSON.parse(localStorage.getItem(key))
}
// Function to set the theme
function setTheme(theme) {
    // Set the theme attribute on the body
    document.body.setAttribute('theme', theme);
    // Store the theme in local storage
    localStorage.setItem('theme', theme);
}

// Apply the stored theme or default theme on page load
window.onload = function() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        setTheme(storedTheme);
        document.getElementById('theme-select').value = storedTheme; // Set the selected value in the theme dropdown
    } else {
        // Default theme if no theme is stored
        const defaultTheme = 'main';
        setTheme(defaultTheme);
        document.getElementById('theme-select').value = defaultTheme; // Set the selected value in the theme dropdown
    }
}

// Event listener for theme selection
document.getElementById('theme-select').addEventListener('change', function() {
    const selectedTheme = this.value;
    setTheme(selectedTheme);
});
// Apply the stored theme or default theme on page load
window.onload = function() {
    console.log("Page loaded."); // Log that the page has loaded
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        console.log("Stored theme:", storedTheme); // Log the stored theme value
        setTheme(storedTheme);
        console.log("Applied theme:", storedTheme); // Log the currently applied theme
        document.getElementById('theme-select').value = storedTheme; // Set the selected value in the theme dropdown
    } else {
        // Default theme if no theme is stored
        const defaultTheme = 'default';
        console.log("No stored theme. Applying default theme:", defaultTheme); // Log that default theme is applied
        setTheme(defaultTheme);
        console.log("Applied theme:", defaultTheme); // Log the currently applied theme
        document.getElementById('theme-select').value = defaultTheme; // Set the selected value in the theme dropdown
    }
}


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


