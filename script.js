document.addEventListener("DOMContentLoaded", (event) => {
  const notepad = document.getElementById("notepad");

  // Load saved content from localStorage
  if (localStorage.getItem("notepadContent")) {
    notepad.innerHTML = localStorage.getItem("notepadContent");
  }

  // Save content to localStorage on input
  notepad.addEventListener("input", () => {
    localStorage.setItem("notepadContent", notepad.innerHTML);
  });
});

// Function to format the selected text
function formatText(command) {
  document.execCommand(command, false, null);
}

// Function to insert a checkbox at the caret position
function insertCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "5px";
  insertNodeAtCaret(checkbox);
}

// Helper function to insert a node at the caret position
function insertNodeAtCaret(node) {
  let sel = window.getSelection();
  if (sel.rangeCount) {
    let range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(node);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}
