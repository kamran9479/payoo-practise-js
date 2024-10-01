// Reveal hidden message
document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('hiddenMessage').style.display = 'block';
    this.style.display = 'none'; // Hide button after clicking
});

// Create flying hearts, flowers, and stars
const heartContainer = document.querySelector('.heart-container');
const flowerContainer = document.querySelector('.flower-container');
const starContainer = document.querySelector('.star-container');

// Generate floating hearts
for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    const size = Math.random() * 40 + 20 + 'px';
    heart.style.width = size;
    heart.style.height = size;
    
    const positionX = Math.random() * window.innerWidth + 'px';
    const positionY = Math.random() * window.innerHeight + 'px';
    heart.style.left = positionX;
    heart.style.top = positionY;
    
    heartContainer.appendChild(heart);
}

// Generate floating flowers
for (let i = 0; i < 20; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    const size = Math.random() * 60 + 30 + 'px';
    flower.style.width = size;
    flower.style.height = size;
    
    const positionX = Math.random() * window.innerWidth + 'px';
    const positionY = Math.random() * window.innerHeight + 'px';
    flower.style.left = positionX;
    flower.style.top = positionY;
    
    flowerContainer.appendChild(flower);
}

// Generate floating stars
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const size = Math.random() * 20 + 10 + 'px';
    star.style.width = size;
    star.style.height = size;
    
    const positionX = Math.random() * window.innerWidth + 'px';
    const positionY = Math.random() * window.innerHeight + 'px';
    star.style.left = positionX;
    star.style.top = positionY;
    
    starContainer.appendChild(star);
}
