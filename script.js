const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Access the device camera and stream to video element
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
       alert('Error accessing the camera: ' + error);
    });

function capturephoto() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}