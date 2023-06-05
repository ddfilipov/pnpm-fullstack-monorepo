import { FC, useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000";

const Temporal: FC = () => {
    const [data, setData] = useState();
    useEffect(() => {
        async function getData() {
            const response = await fetch(`${BASE_URL}/get`);
            setData(await response.json());
        }
        getData();
    }, []);
    return <div>{data}</div>;
};
export default Temporal;
