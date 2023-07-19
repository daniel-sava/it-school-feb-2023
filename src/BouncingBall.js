import { useRef } from "react";
import "./BouncingBall.css";

export default function BouncingBall() {
    const ballElement = useRef();

    function toggleBallAnimation() {
        ballElement.current.classList.toggle("animated");
    }

    return (
        <>
            <div className="container">
                <div ref={ballElement} className="circle"></div>
            </div>
            <button onClick={toggleBallAnimation}>Toggle bouncing</button>
        </>
    );
}
