// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Block specific key combinations
document.addEventListener('keydown', function (e) {
    // Block F12
    if (e.keyCode == 123) {
        e.preventDefault();
    }
    // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Windows/Linux)
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67)) {
        e.preventDefault();
    }
    // Block Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode == 85) {
        e.preventDefault();
    }
    // Block Command+Shift+I, Command+Shift+J, Command+Shift+C (Mac)
    if (e.metaKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67)) {
        e.preventDefault();
    }
});