import { useState, useEffect } from "react";
import { Button } from 'antd';
// import * as THREE from 'three';
import { Card } from 'antd';

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
            setShow({ X: parseInt(pose.keypoints[9].position.x) + 550, Y: parseInt(pose.keypoints[9].position.y) - 80 })
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
                <div className="d-flex justify-content-center">
                    <Card style={{ width: 800 }}>
                        <div>
                            <div className="hide">
                                <div id="label-container"></div>
                            </div>
                            <div><canvas id="canvas"></canvas></div>
                            <div className="alligator-show-box2">
                            </div>
                            <h1>Position:X {show.X}</h1>
                            <h1>Position:Y {show.Y}</h1>
                            <Button type="primary" onClick={init}> Open AI Tracking </Button>
                        </div>
                        <div>
                            {/* <img className='banner' src='https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/01/10/487792/197726/low_poly_car_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2086706_o.png' /> */}
                            <div className="antion2">
                                <img scr="https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/01/10/487792/197726/low_poly_car_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2086706_o.png" />
                            </div>
                            <div className="antion"></div>
                        </div>
                    </Card>
                    <img className='banner' src='https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/01/10/487792/197726/low_poly_car_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2086706_o.png' />
                </div>
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