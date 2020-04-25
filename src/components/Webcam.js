import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { message } from 'antd';
import { Progress } from 'antd';
import { Card } from 'react-bootstrap';
const Webcam = () => {
    useEffect(() => {
    })
    const [show, setShow] = useState([{}]);
    const [position,setPosition] = useState({});
    const URL = "https://teachablemachine.withgoogle.com/models/koYhNUen/";
    let model, webcam, labelContainer, maxPredictions;
    const Webcam = () => {
        message.success('กำลังเปิดกล้องอัจฉาริยะกรุณารอสักครู่');
        async function init() {
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";
            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();
            const flip = true;
            webcam = new tmImage.Webcam(350, 350, flip);
            await webcam.setup();
            await webcam.play();
            window.requestAnimationFrame(loop);
            document.getElementById("webcam-container").appendChild(webcam.canvas);
            labelContainer = document.getElementById("label-container");
            for (let i = 0; i < maxPredictions; i++) { // and class labels
                labelContainer.appendChild(document.createElement("div"))
            }
        }
        init()
    }
    async function loop() {
        webcam.update();
        await predict();
        window.requestAnimationFrame(loop);
    }
    async function predict() {
        const prediction = await model.predict(webcam.canvas);
        setShow(prediction);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = (classPrediction);
        }
    }
    return (
        <div>
            <div>
                <div>
                    <div className="test">
                        <h1 className="d-flex justify-content-center">Action Moving</h1>
                        <div className="d-flex justify-content-center">
                            <Button type="primary" onClick={Webcam}>Open Action CR</Button>
                        </div>
                        <h1 className="d-flex justify-content-center">Result</h1>
                        <div className="d-flex justify-content-center">
                            <div className="test">
                                <div id='webcam-container' className="box-webcam"></div>
                                <div id='label-container' className="text-webcam"></div>
                                <div className="d-flex justify-content-center">
                                    <div className="test">
                                        {
                                            show.map((data, index) => {
                                                return (

                                                    <div key={index} style={{ width: 250 }}>
                                                        <p className="text-p">{'' + parseInt(data.probability * 100) == "NaN" ? '' : data.className}</p>
                                                        <Progress percent={parseInt(data.probability * 100)} size="small" status="active" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="antion">
                </div>
            </div>
            <style jsx>{`
            .antion{
                width: 100px;
                height: 100px;
                background: red;
                position: relative;
                animation: myfirst 10s 5;
                animation-direction: alternate;
                }
                @keyframes myfirst {
                0%   {background: red; left: 0px; top: 0px;}
                25%  {background: yellow; left: 200px; top: 0px;}
                50%  {background: blue; left: 200px; top: 200px;}
                75%  {background: green; left: 0px; top: 200px;}
                100% {background: red; left: 0px; top: 0px;}
}
                .test{
                    display:flex;
                    flex-direction:column;
                }
                .box-webcam{
                    margin-top:10px;
                    box-shadow: 0 0 0.3cm rgba(0,0,0,0.15);
                }
                .text-webcam{
                    display: none;
                }
                .text-p{
                    margin-top:20px;
                }
            `}</style>
        </div>
    )
}

export default Webcam;