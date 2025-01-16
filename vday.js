document.getElementById('yesBtn').addEventListener('click', () => {

  // Find the existing container where you want to append the GIF (e.g., with class 'container' or another specific div)
  const container = document.querySelector('.container'); // Modify this selector if needed

  // Create a new div to hold the Tenor GIF embed
  const tenorEmbedDiv = document.createElement('div');
  tenorEmbedDiv.classList.add('tenor-gif-embed');
  tenorEmbedDiv.setAttribute('data-postid', '16606050094708454978');
  tenorEmbedDiv.setAttribute('data-share-method', 'host');
  tenorEmbedDiv.setAttribute('data-aspect-ratio', '1.02469');
  tenorEmbedDiv.setAttribute('data-height', '100%');

  // Append the created div under the existing container
  container.appendChild(tenorEmbedDiv);

  // Load the Tenor script to make the embed work
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://tenor.com/embed.js';
  document.body.appendChild(script); // You can append this to the body, or container if needed

  const textDiv = document.getElementById('one'); // Replace with the ID or class of your target div
  if (textDiv) {
    textDiv.innerHTML = "I love you very much :)"; // New text content
  }

  const nextDiv = document.getElementById('two'); // Replace with the ID or class of your target div
  if (nextDiv) {
    nextDiv.innerHTML = "Now that this is done"; // New text content
  }

  const lastDiv = document.getElementById('three'); // Replace with the ID or class of your target div
  if (lastDiv) {
    //lastDiv.innerHTML = "<a href=\"vday2.html\" target=\"_blank\">click here</a>";
    lastDiv.innerHTML = "<a href=\"https://br0kestudent-rfrm.github.io/MyValentine/vday2.html\" target=\"_blank\">click here</a>"; // New text content
  }

});

  
  document.getElementById('noBtn').addEventListener('click', () => {
    const noButton = document.getElementById('noBtn');
  
    noButton.classList.add('shrinking');
  
    setTimeout(() => {
      noButton.style.display = 'none';
    }, 1000);
  });
  
  
