import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000";

export default function Home() {
    const [data, setData] = useState();
    useEffect(() => {
        async function getData() {
            const response = await fetch(`${BASE_URL}/get`);
            setData(await response.json());
        }
        getData();
    }, []);
    return <div>{data}</div>;
}
