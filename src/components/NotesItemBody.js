import React from "react";

function NotesItemBody({ title, note, createAt }) {
  return (
    <div className="note-app__body">
      <h3 className="note-item__title"> {title}</h3>
      <p className="note-item__date"> {createAt}</p>
      <p className="note-item__body"> {note}</p>
    </div>
  );
}

export default NotesItemBody;
