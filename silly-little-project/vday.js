document.getElementById('yesBtn').addEventListener('click', () => {
    alert("Yay! You said YES! 💖");
  });
  
  document.getElementById('noBtn').addEventListener('click', () => {
    const noButton = document.getElementById('noBtn');
  
    noButton.classList.add('shrinking');
  
    setTimeout(() => {
      noButton.style.display = 'none';
    }, 1000);
  });
  
  