import React from "react";

import NotesItemBody from "./NotesItemBody";
import NotesItemButton from "./NotesItemButton";
import { showFormattedDate } from "../utils";

function NotesItem({ note, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NotesItemBody
        title={note.title}
        note={note.body}
        createAt={showFormattedDate(note.createdAt)}
      />
      <NotesItemButton
        id={note.id}
        archived={note.archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NotesItem;
