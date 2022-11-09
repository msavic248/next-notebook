import PocketBase from 'pocketbase';
import styles from "../Notes.module.css";
import UpdateNote from "./UpdateNote";
import DeleteNote from "./DeleteNote";

async function getNote(noteId: string) {
    
    try{
        const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
            {
                next: {revalidate: 10}
            }
        );
        const record = await res.json();
        return record;
    } catch(error) {
        console.error(error)
    }
    
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const record = await db.records.getOne('notes', `${noteId}`, {
    //     expand: 'some_relation'
    // });
    
}

export default async function NotePage({params}: any) {
    const note = await getNote(params.id);

    return(
    <>
        <h1>notes/{note.id}</h1>
        <div className={styles.note}>
            <div className={styles.notetext}>
                <h2>{note.title}</h2>
                <h5>{note.content}</h5>
                <p>{note.created.substring(0, note.created.length - 4)}</p>
            </div>
        </div>
        <div className={styles.notebuttons}>
            <div>
                <UpdateNote id={note.id} />
            </div>
            <div>
                <DeleteNote id={note.id} />
            </div>
            
        </div>
    </>
    )
}