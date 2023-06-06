import React from "react";

import NotesItem from "./NotesItem";

function NotesArchives({ notes, onDelete, onArchive }) {
  const notesArchived = notes.filter((note) => note.archived === true);

  return (
    <>
      <h2>Archive</h2>
      {notesArchived.length === 0 ? (
        <h3>Tidak ada Catatan</h3>
      ) : (
        <div className="notes-list">
          {notesArchived.map((note) => {
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

export default NotesArchives;
