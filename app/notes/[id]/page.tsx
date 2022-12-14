import styles from "../Notes.module.css";
import UpdateNote from "./UpdateNote";
import DeleteNote from "./DeleteNote";

async function getNote(noteId: string) {
    
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: {revalidate: 10},
            // cache: "no-cache",
        }
    );
    const data = await res.json();
    return data;
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
                <p>{note.created && note.created.substring(0, note.created.length - 4)}</p>
            </div>
        </div>

        <div className={styles.notebuttons}>
            <div>
                {/* <UpdateNote /> */}
            </div>
            <div>
                {/* <DeleteNote /> */}
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