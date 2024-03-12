const themeSelect = document.getElementById('theme-select');

// Function to set the theme
function setTheme(theme) {
    document.body.setAttribute('theme', theme); // Set the theme attribute on the body
    localStorage.setItem('theme', theme); // Store the theme in local storage
}

// Apply the stored theme on page load
window.onload = function() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        setTheme(storedTheme);
        themeSelect.value = storedTheme; // Set the selected value in the theme dropdown
    }
}

// Event listener for theme selection
themeSelect.addEventListener('change', function() {
    const selectedTheme = this.value;
    setTheme(selectedTheme);
});
