function toggleSettings() {
    const settingsBar = document.getElementById('settingsBar');
    if (settingsBar.classList.contains('open')) {
        settingsBar.classList.remove('open');
    } else {
        settingsBar.classList.add('open');
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function setActive(element) {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}