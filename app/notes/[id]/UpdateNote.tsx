'use client';

import { useState } from "react";

export default function UpdateNote(params: any) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [show, setShow] = useState(false);

    async function update() {
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
        await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${params.id}`, data);

        setTitle("");
        setContent("");
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
            <button onClick={handleButtonClick}>Update note</button>
            {show && <form onSubmit={update}>
                <h3>Update note</h3>

                <input type="text" placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} />
                <textarea placeholder="Content" value={content} onChange={event => setContent(event.target.value)} />
                <button type="submit">Update</button>
            </form>}
        </>
    )
}
