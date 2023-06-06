import React from "react";

import NotesItem from "./NotesItem";

function NotesActives({ notes, onDelete, onArchive }) {
  const notesActives = notes.filter((note) => note.archived === false);
  console.log(notesActives);
  return (
    <>
      <h2>Active</h2>
      {notesActives.length === 0 ? (
        <h3>Tidak Ada Catatan</h3>
      ) : (
        <div className="notes-list">
          {notesActives.map((note) => {
            return (
              <NotesItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default NotesActives;
