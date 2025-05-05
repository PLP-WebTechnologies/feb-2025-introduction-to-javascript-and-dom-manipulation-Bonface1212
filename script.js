// Change text content dynamically
const changeTextButton = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextButton.addEventListener('click', () => {
    dynamicText.textContent = "🎉 The text has been changed dynamically!";
    dynamicText.style.color = 'blue';   // Modifies CSS style
    dynamicText.style.fontWeight = 'bold';
});

// Add or Remove an element when button is clicked
const toggleElementButton = document.getElementById('toggle-element-btn');
const contentSection = document.getElementById('content-section');

let isElementAdded = false;

toggleElementButton.addEventListener('click', () => {
    if (!isElementAdded) {
        const newElement = document.createElement('div');
        newElement.id = 'extra-element';
        newElement.textContent = "✨ New element added!";
        newElement.style.marginTop = '15px';
        newElement.style.padding = '10px';
        newElement.style.backgroundColor = '#e0e0e0';
        contentSection.appendChild(newElement);
        isElementAdded = true;
    } else {
        const extraElement = document.getElementById('extra-element');
        if (extraElement) {
            contentSection.removeChild(extraElement);
        }
        isElementAdded = false;
    }
});
