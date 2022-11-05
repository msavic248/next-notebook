import PocketBase from 'pocketbase';
import styles from "../Notes.module.css";

async function getNote(noteId: string) {
    const db = new PocketBase('http://127.0.0.1:8090');
    const record = await db.records.getOne('notes', `${noteId}`, {
        expand: 'some_relation'
    });
    return record;
}

export default async function NotePage({params}: any) {
    const note = await getNote(params.id);

    return(
        <div>
            <h1>notes/{note.id}</h1>
            <div className={styles.note}>
                <h2>{note.title}</h2>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    )
}