import Link from "next/link";
import PocketBase from 'pocketbase';
import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

async function getNotes() {

    // const db = new PocketBase('http://127.0.0.1:8090');
    // const data = await db.records.getList("notes", 1, 8, {
    //     filter: 'created >= "2022-01-01 00:00:00"',
    // });
    try{
        const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
        {cache: "no-store"});
        const data = await res.json();
        return data?.items as any[];
    } catch(error) {
        console.error(error)
    }
    
}

export default async function NotesPage() {
    const notes = await getNotes();

    return(
        <div className={styles.notes}>
            <h1>Notes</h1>
            <div className={styles.link}>
                {notes?.map(note => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>
            <CreateNote />
        </div>
    )
}

function Note({note}: any) {
    const {id, title, content, created} = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className={styles.notetext}>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created.substring(0, created.length - 4)}</p>
            </div>
        </Link>
    )
}