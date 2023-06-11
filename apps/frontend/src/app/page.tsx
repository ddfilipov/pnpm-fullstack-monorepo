"use client";

import PeopleList from "../atomic/organisms/PeopleList";

export default function Home() {
    return (
        <>
            <h1>People</h1>
            <p>You can add, delete and edit people.</p>
            <PeopleList />
        </>
    );
}
