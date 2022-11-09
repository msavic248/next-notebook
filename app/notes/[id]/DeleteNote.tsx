'use client';

import { useState } from "react";

export default function DeleteNote({id}: any) {

  const [deleted, setDeleted] = useState(false)

  async function deleteNote() {
    try {
      const data = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
      };
      await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, data);
      
      setDeleted(true);
    } catch(error){
      console.error(error);
    }
    
  }


  return (
    <>
      <button onClick={() => deleteNote()}>Delete note</button>
      {deleted && <p>Note has been deleted</p>}
    </>
  )
}
