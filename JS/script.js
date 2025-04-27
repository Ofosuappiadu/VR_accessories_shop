// Visitor Counter Logic
let count = localStorage.getItem('visitorCount') || 0;
count++;
localStorage.setItem('visitorCount', count);
document.getElementById('count').innerText = count;
