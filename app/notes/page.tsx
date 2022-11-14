import styles from "./Notes.module.css";
import Note from "./Note";
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
        {
            cache: "no-store"
        });
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
                    return <Note key={note.id} note={note} styles={styles} />;
                })}
            </div>
            <CreateNote styles={styles} />
        </div>
    )
}

