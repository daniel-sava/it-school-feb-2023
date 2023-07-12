import { useEffect, useState } from "react";

export default function CurrentTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
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
