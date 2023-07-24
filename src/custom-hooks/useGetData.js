import { useEffect, useState } from "react";

const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [currentUser, setCurrentUser] = useState({
        name: "Mihai",
        status: "Offline",
    });

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    return [data, setData, currentUser, setCurrentUser];
};

export default useGetData;
