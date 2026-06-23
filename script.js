// 1. Grab the HTML elements we need and store them in variables
const themeButton = document.getElementById('theme-btn');
const bodyElement = document.body;

// 2. Tell the button to listen closely for a user action (a click)
themeButton.addEventListener('click', () => {
  
  // 3. Whenever clicked, flip the "dark-theme" class on or off on the body
   bodyElement.classList.toggle('dark-theme');
  
  // 4. Update the text inside the button dynamically so the user knows what's happening
  if (bodyElement.classList.contains('dark-theme')) {
    themeButton.textContent = '☀️ Light Mode';
  } else {
    themeButton.textContent = '🌙 Dark Mode';
  }
  
});
