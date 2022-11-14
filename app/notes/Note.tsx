import Link from "next/link";

export default function Note({note, styles}: any) {
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