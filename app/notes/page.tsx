import Link from "next/link";
import PocketBase from 'pocketbase';
import styles from "./Notes.module.css";
import { useState } from "react";

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getNotes() {

    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.records.getList("notes", 1, 6, {
        filter: 'created >= "2022-01-01 00:00:00"',
    });
    // const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    // {cache: "no-store"});
    // const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return(
        <div>
            <div className={styles.titles}>
                <h1>Notes</h1>
                <button>New note</button>
            </div>
            <div className={styles.link}>
                {notes?.map(note => {
                    return <Note key={note.id} note={note} />;
                })}
                <button>Next page</button>
            </div>
        </div>
    )
}

function Note({note}: any) {
    const {id, title, content, created} = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className={styles.note}>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}