import { useState, useEffect } from "react";
// import * as THREE from 'three';
const Hand_Tracking = () => {
    const [pixel, setPixel] = useState(null)
    const URL = "https://teachablemachine.withgoogle.com/models/eC_CB8mU/";
    let model, webcam, ctx, labelContainer, maxPredictions;
    const [show, setShow] = useState({ X: null, Y: null });
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        const size = 300;
        const flip = true;
        webcam = new tmPose.Webcam(size, size, flip);
        await webcam.setup();
        await webcam.play();
        window.requestAnimationFrame(loop);
        const canvas = document.getElementById("canvas");
        canvas.width = size; canvas.height = size;
        ctx = canvas.getContext("2d");
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        if (pose) {
            pose.keypoints.forEach(data => {
                if (data.part === 'leftWrist') {
                    if (data.score > 0.5) {
                        setShow({ X: parseInt(data.position.x / 30), Y: parseInt((data.position.y / 30)) })
                    }
                }
            })
            setShow({ X: parseInt(pose.keypoints[9].position.x) - 30, Y: parseInt(pose.keypoints[9].position.y) - 80 })
        }
        const prediction = await model.predict(posenetOutput);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
        drawPose(pose);
    }

    function drawPose(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            if (pose) {
                console.log(pose)
                const minPartConfidence = 0.8;
                pose.keypoints.forEach(data => {
                    if (data.part === 'leftWrist') {
                        console.log(data.part)
                        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
                    }
                })
            }
        }
    }
    return (
        <div>
            <div>
                <button onClick={init}> 555 </button>
                <div className="hide">
                    <div id="label-container"></div>
                </div>
                <div><canvas id="canvas"></canvas></div>
                <div className="alligator-show-box2">
                </div>
                <h1>Position:X {show.X}</h1>
                <h1>Position:Y {show.Y}</h1>
            </div>
            <img className='banner' src='https://www.thairath.co.th/media/dFQROr7oWzulq5FZYjcZjekOTsB2pHQR2rTC5kP2dgLZ8cEAu6XO6hi4hHrgwwqZd36.jpg' />
            <div className="antion2">
                <img scr="https://i.pinimg.com/originals/14/e5/13/14e513e4b3f04be4a1a235417e290701.png" />
            </div>
            <div className="antion">
            </div>
            <style jsx>{`
            .banner{
                position: absolute;
                top: ${ show.Y}px;
                left: ${ show.X}px;
                width: 80px;
                height: 80px;
            }
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
        .hide{
            display:none;
        }
      `}</style>
        </div>
    )
}
export default Hand_Tracking;