'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Notes.module.css";

export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [show, setShow] = useState(false);

    const router = useRouter();

    async function create() {
        const data = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content,
            }),
        };
        await fetch ("http://127.0.0.1:8090/api/collections/notes/records", data);

        setTitle("");
        setContent("");

        router.refresh();
    }

    function handleButtonClick() {
        if(!show) {
            setShow(true);
        } else if (show) {
            setShow(false);
        }
    }

    return (
        <>
            <button className={styles.button} onClick={handleButtonClick}>Create a new Note</button>
            {show && <form onSubmit={create}>
                <h3>Create a new Note</h3>
                
                <input type="text" placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} />
                <textarea placeholder="Content" value={content} onChange={event => setContent(event.target.value)} />
                <button className={styles.button} type="submit">Create</button>
            </form>}
        </>
    )
}