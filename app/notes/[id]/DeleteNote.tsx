'use client';

import { useState } from "react";
import { useRouter, usePathname  } from "next/navigation";
import styles from "../Notes.module.css";

export default function DeleteNote() {

  const [deleted, setDeleted] = useState(false);

  const router = useRouter();

  //get path and remove "/notes/"
  const pathname = usePathname();
  const id = pathname?.substring(7);

  
  async function deleteNote() {
    const data = {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      },
    };
    await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, data);
    
    setDeleted(true);
    
  }

  function handleButtonClick() {
    deleteNote();
    router.refresh();
    router.push("/notes")
  }

  return (
    <div>
      {deleted && <p>Note has been deleted</p>}
      <button className={styles.button} onClick={handleButtonClick}>Delete note</button>
    </div>
  )
}
