'use client';

import { useState } from "react";
import { useRouter, usePathname  } from "next/navigation";
import styles from "../Notes.module.css";

export default function UpdateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [show, setShow] = useState(false);

    const router = useRouter();

    //get path and remove "/notes/"
    const pathname = usePathname();
    const id = pathname.substring(7);

    async function update() {
        try{
            const data = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    content,
                }),
            };
            await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, data);
        } catch(error) {
            console.error(error)
        } finally {
            setTitle("");
            setContent("");

            router.refresh();
        }
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
            <button className={styles.button} onClick={handleButtonClick}>Update note</button>
            {show && <form onSubmit={update}>
                <h3>Update note</h3>
                
                <input type="text" placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} />
                <textarea placeholder="Content" value={content} onChange={event => setContent(event.target.value)} />
                <button className={styles.button} type="submit">Update</button>
            </form>}
        </>
    )
}
