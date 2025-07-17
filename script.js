// script.js

// Function to copy text from a textarea/input
function copyEntry(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.select();
        element.setSelectionRange(0, 99999); // For mobile devices

        try {
            document.execCommand('copy');
            showMessage("Content copied to clipboard!");
        } catch (err) {
            showMessage("Failed to copy content. Please copy manually.");
            console.error('Copy failed:', err);
        }
    }
}

// Function to print the page
function printPage() {
    window.print();
}

// Function to show a message box
function showMessageBox(message) {
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    messageText.textContent = message;
    messageBox.classList.remove('hidden');
}

// Function to hide the message box
function hideMessageBox() {
    const messageBox = document.getElementById('messageBox');
    messageBox.classList.add('hidden');
}

// Alias for showMessageBox for consistency with previous functions
function showMessage(message) {
    showMessageBox(message);
}

// Auto-resize textareas based on content
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('textarea').forEach(textarea => {
        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = (textarea.scrollHeight) + 'px';
        });
        // Initial resize on load
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    });
});