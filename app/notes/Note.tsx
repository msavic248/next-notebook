import Link from "next/link";
import styles from "./Notes.module.css";

export default function Note({note}: any) {
    const {id, title, content, created} = note;

    return (
        <Link href={`/notes/${id}`} passHref>
            <div className={styles.notetext}>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created && created.substring(0, created.length - 4)}</p>
            </div>
        </Link>
    )
}