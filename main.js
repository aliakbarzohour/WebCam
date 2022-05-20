const video = document.querySelector("#video");

let facingMode = "user";
let constraints = {
    audio: false,
    video: {
        facingMode
    }
};

function OnCamera() {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream;
    });
    console.log("camera on")
}

function OffCamera() {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = null;
    });
}