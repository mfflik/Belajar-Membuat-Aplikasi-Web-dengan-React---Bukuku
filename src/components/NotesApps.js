import React, { Component } from "react";
import NotesInput from "./NotesInput";
import NotesActives from "./NotesActives";
import NotesArchives from "./NotesArchives";
import NotesHeader from "./NotesHeader";
import { getInitialData } from "../utils";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class NotesApps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchData: "",
      notesData: getInitialData(),
      search: "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onArchiveHandler(id) {
    const notes = this.state.notesData.map((note) => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    });
    this.setState({
      notes: notes,
      notesData: notes,
    });
    if (this.state.searchData.length > 0) {
      const notesSearch = this.state.searchData.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      });
      const notes = this.state.notesData.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      });

      this.setState({
        notes: notesSearch,

        searchData: notesSearch,
        notesData: notes,
      });
    }
    MySwal.fire({
      icon: "success",
      title: <p>Success</p>,
      text: "Data Berhasil Diubah",
    });
  }

  onDeleteHandler(id) {
    if (this.state.searchData.length > 0) {
      const notesSearch = this.state.searchData.filter(
        (note) => note.id !== id
      );
      const notes = this.state.notesData.filter((note) => note.id !== id);

      this.setState({
        searchData: notesSearch,
        notes: notesSearch,
        notesData: notes,
      });
    } else {
      const notes = this.state.notesData.filter((note) => note.id !== id);
      this.setState({
        notes: notes,
        notesData: notes,
      });
    }
    MySwal.fire({
      icon: "success",
      title: <p>Success</p>,
      text: "Data Berhasil Dihapus",
    });
  }

  onAddNoteHandler({ title, body }) {
    const notes = [
      ...this.state.notesData,
      {
        id: Date.now(),
        title,
        body,
        createdAt: new Date(),
        archived: false,
      },
    ];
    if (this.state.searchData.length > 0) {
      this.setState({
        notes,
        notesData: notes,
      });
    } else {
      this.setState({
        notes,
        notesData: notes,
      });
    }
    MySwal.fire({
      icon: "success",
      title: <p>Success</p>,
      text: "Data Berhasil Ditambahkan",
    });
  }

  onSearchHandler(e) {
    const notes = this.state.notesData.filter((note) => {
      const noteData = note.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      return noteData;
    });
    if (notes.length > 0) {
      this.setState({
        searchData: notes,
        notes: notes,
      });
    } else {
      MySwal.fire({
        icon: "warning",
        title: <p>Search Not Found</p>,
        text: "Maaf Pencarian Tidak Ditemukan",
      });
      this.setState({
        searchData: notes,
        notes: notes,
      });
    }
  }

  render() {
    return (
      <div className="notes-apps">
        <NotesHeader onSearch={this.onSearchHandler} />

        <div className="note-app__body">
          <NotesInput onAddNote={this.onAddNoteHandler} />

          <NotesActives
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          
          <NotesArchives
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default NotesApps;
