function toggleMode() {
    // Gets the document's class="light" and add/remove it, so it changes to light-mode or back
    const page = document.documentElement;
    page.classList.toggle('light-mode');

    // Gets the img tag
    const img = document.querySelector('img#profile');

    // Checks if the document is in light-mode or not, and switches img accordingly
    if (page.classList.contains('light-mode')) {
        img.setAttribute('src', './images/profile-light.png');
    } else {
        img.setAttribute('src', './images/profile.png');
    }

}