// Giving video element in html
const video = document.querySelector("#video");

let facingMode = "user";
let constraints = {
    audio: false,
    video: {
        facingMode
    }
};
// function for turn on camera
function OnCamera() {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream;
    });
    console.log("camera on")
}

// function for turn off camera
function OffCamera() {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = null;
    });
}