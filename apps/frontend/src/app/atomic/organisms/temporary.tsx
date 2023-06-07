// "use client";
import { FC, useEffect, useState } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
const BASE_URL = "http://localhost:5000";

const Temporal: FC = () => {
    const [data, setData] = useState<IPersonData[]>([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch(`${BASE_URL}/get`);
            const jsonReponse = await response.json();
            console.log("jsonReponse.result:", jsonReponse.result);
            setData(jsonReponse.result);
        }
        getData();
    }, []);
    return (
        <div>
            {data?.map((person) => {
                console.log("asd");
                return (
                    <>
                        <p>{person.name}</p>
                        <ul>
                            <li>{person.money}</li>
                            <li>{person.birthDate.toString()}</li>
                            <li>{person.vip}</li>
                        </ul>
                    </>
                );
            })}
        </div>
    );
};
export default Temporal;
