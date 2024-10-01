// visitorCounter.js

document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/visitor-count', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        console.log(`You are visitor number ${data.count}`);
        const counterElement = document.getElementById('visitor-count');
        if (counterElement) {
          counterElement.textContent = data.count;
        } else {
          console.warn('Element with id "visitor-count" not found');
        }
      })
      .catch(error => console.error('Error:', error));
  });