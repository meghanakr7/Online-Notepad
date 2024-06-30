document.addEventListener("DOMContentLoaded", (event) => {
  const notepad = document.getElementById("notepad");

  // Load saved content from chrome.storage
  chrome.storage.sync.get(["notepadContent"], function (result) {
    if (result.notepadContent) {
      notepad.innerHTML = result.notepadContent;
    }
  });

  // Save content to chrome.storage on input
  notepad.addEventListener("input", () => {
    chrome.storage.sync.set({ notepadContent: notepad.innerHTML });
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
