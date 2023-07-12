import { useEffect, useState } from "react";

export default function CurrentTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("set interval");
            setTime(new Date());
        }, 1000);

        return () => {
            console.log("unmount");
            clearInterval(interval);
        };
    }, []);

    return (
        <p>
            <span style={{ fontWeight: "bold" }}>Ora curenta:</span>{" "}
            {time.toUTCString()}
        </p>
    );
}
