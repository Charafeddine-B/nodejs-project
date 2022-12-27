// Create video element
const video = document.createElement('video');

// Use local file
// video.src = 'video.mp4';

// Use remote file
video.src = 'C:/Users/Indounette/OneDrive/Bureau/node/data/Art/30 Sec Draw Rhaenyra Targaryen - House of the Dragon #shorts #hotd #art.mp4';

video.controls = true;
video.muted = false;


const box = document.getElementById('box');
// Include in HTML as child of #box
box.appendChild(video);
