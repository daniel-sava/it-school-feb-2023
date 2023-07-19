import { useRef } from "react";
import "./InfoBanner.css";

export default function InfoBanner() {
    const bannerElement = useRef();

    function hideBanner() {
        bannerElement.current.style.display = "none";
    }

    return (
        <div ref={bannerElement} className="banner-container">
            <h2>Sunt un banner cu informatii!!</h2>
            <button onClick={hideBanner}>Ok, am inteles!</button>
        </div>
    );
}
