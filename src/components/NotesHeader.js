import React from "react";

const NotesHeader = ({ onSearch }) => {
  return (
    <nav className="note-app__header">
      <h1>My Notes</h1>
      <div className="note-search">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => onSearch(e)}
        />
      </div>
    </nav>
  );
};

export default NotesHeader;
