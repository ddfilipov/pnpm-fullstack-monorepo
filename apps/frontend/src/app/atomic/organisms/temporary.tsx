// "use client";
import { FC, useEffect, useState } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
const BASE_URL = "http://localhost:5000";

const Temporal: FC = () => {
    const [data, setData] = useState<IPersonData[]>();
    useEffect(() => {
        async function getData() {
            const response = await fetch(`${BASE_URL}/get`);
            const jsonReponse = await response.json();
            setData(jsonReponse.result);
        }
        getData();
    }, []);
    return <div>{data.}</div>;
};
export default Temporal;
