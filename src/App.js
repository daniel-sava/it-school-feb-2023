import { useRef, useState } from "react";
import BouncingBall from "./BouncingBall";
import InfoBanner from "./InfoBanner";

import styles from "./App.module.css";

function App() {
    const [count, setCount] = useState(0);
    const counter = useRef(0);

    return (
        <div className={styles.App}>
            {/* <button
                onClick={() => {
                    counter.current++;
                    console.log(counter);
                }}
            >
                Clicked {counter.current}
            </button>

            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Counter with useState {count}
            </button> */}

            <InfoBanner />
            <BouncingBall />
        </div>
    );
}

export default App;
