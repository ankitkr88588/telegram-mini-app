// File: public/app.js
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Telegram WebApp
  const tgWebApp = window.Telegram.WebApp;
  
  // Init the WebApp
  tgWebApp.ready();
  
  // Set theme
  document.body.style.backgroundColor = tgWebApp.backgroundColor;
  
  // Get user data
  const user = tgWebApp.initDataUnsafe.user;
  
  if (user) {
    // Display user info
    document.getElementById('user-name').textContent = user.first_name + (user.last_name ? ' ' + user.last_name : '');
    document.getElementById('username').textContent = user.username || 'N/A';
    document.getElementById('user-id').textContent = user.id || 'N/A';
    
    // Set user photo if available
    if (user.photo_url) {
      document.getElementById('user-photo').style.backgroundImage = `url(${user.photo_url})`;
    }
  } else {
    document.getElementById('user-name').textContent = 'User data not available';
    document.getElementById('username').textContent = 'N/A';
    document.getElementById('user-id').textContent = 'N/A';
  }
  
  // Expand webapp to fullscreen
  tgWebApp.expand();
});
