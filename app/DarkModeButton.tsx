'use client';

import { UilMoon, UilSun } from '@iconscout/react-unicons';
import {useState} from "react";

export default function DarkModeButton() {
    const [dark, setDark] = useState(false);
    let body;

    if (typeof document !== 'undefined') {
        // will run in client's browser only
        body = document.querySelector("body");
    }
    

    function handleButtonClick() {
        if(dark) {
            body?.classList.remove("dark");

            setDark(false)
        } else {
            body?.classList.add("dark");

            setDark(true)
        }
    }
    

    return (
        <>
            {dark ? <button onClick={handleButtonClick}><UilSun /></button> : <button onClick={handleButtonClick}><UilMoon /></button>}
        </>
    )
}
