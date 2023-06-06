import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      archived: false,
      titleLength: 50,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(e) {
    if (e.target.value.length <= 50) {
      this.setState({
        title: e.target.value,
        titleLength: 50 - e.target.value.length,
      });
    }
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.state.title) {
      MySwal.fire({
        icon: "warning",
        title: <p>Judul Tidak ada</p>,
        text: "Maaf Judul harus diisiikan",
      });
    } else if (!this.state.body) {
      MySwal.fire({
        icon: "warning",
        title: <p>Note Tidak ada</p>,
        text: "Maaf Note harus diisiikan",
      });
    } else {
      this.setState({
        title: "",
        body: "",
        archived: false,
        titleLength: 50,
      });

      this.props.onAddNote(this.state);
    }
  }

  render() {
    return (
      <div className="note-input">
        <form onSubmit={this.onSubmit}>
          <h2>Add Notes</h2>
          <p className="note-input__title__char-limit">
            Remaining Character {this.state.titleLength} on Title
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Enter title in here"
            value={this.state.title}
            onChange={(e) => this.onTitleChange(e)}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Enter note in here"
            value={this.state.body}
            onChange={(e) => this.onBodyChange(e)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
