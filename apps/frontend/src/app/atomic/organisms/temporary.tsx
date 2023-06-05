// "use client";
import { FC, useEffect, useState } from "react";
const BASE_URL = "http://localhost:5000";

const Temporal: FC = () => {
    const [data, setData] = useState();
    useEffect(() => {
        async function getData() {
            const response = await fetch(`${BASE_URL}/get`);
            const jsonReponse = await response.json();
            setData(jsonReponse.result);
        }
        getData();
    }, []);
    console.log("a vbererser data:", data);
    return <div>{data}</div>;
};
export default Temporal;
