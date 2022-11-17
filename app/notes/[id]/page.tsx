import styles from "../Notes.module.css";
import UpdateNote from "./UpdateNote";
import DeleteNote from "./DeleteNote";
import { notFound } from "next/navigation";

// export const dynamicParams = true;

async function getNote(noteId: string) {
    
    try{
        const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
            {
                // next: {revalidate: 10},
                cache: "no-cache",
            }
        );
        const record = await res.json();
        return record;
    } catch(error) {
        console.error(error)
    }
}

export default async function NotePage({params}: any) {
    const note = await getNote(params.id);

    if(!note.id) {
       return notFound();
    }

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
                <UpdateNote />
            </div>
            <div>
                <DeleteNote />
            </div>
            
        </div>
    </>
    )
}

// export async function generateStaticParams() {
//     const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30");
//     const data = await res.json();

//     return data.items.map(note => ({
//         noteId: note.id.toString(), 
//     }))
// }