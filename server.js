document.addEventListener('DOMContentLoaded', (event) => {
    const notepad = document.getElementById('notepad');

    // Load saved content from localStorage
    if (localStorage.getItem('notepadContent')) {
        notepad.value = localStorage.getItem('notepadContent');
    }

    // Save content to localStorage on input
    notepad.addEventListener('input', () => {
        localStorage.setItem('notepadContent', notepad.value);
    });
});
