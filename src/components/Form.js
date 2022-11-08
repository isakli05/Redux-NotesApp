import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../redux/notes/notesSlice";

function Form() {
  const [noteText, setNoteText] = useState("");
  const [noteColor, setNoteColor] = useState("");
  const dispatch = useDispatch();
  const addNote = () => {
    if (!noteText) return;
    dispatch(addNewNote({ noteText, noteColor }));
    setNoteText("");
  };
  return (
    <div className="form">
      <textarea
        rows={5}
        className="newNote"
        placeholder="Enter your note here..."
        autoFocus
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <div className="flex">
        <div className="custom-radios">
          <div>
            <input
              onChange={(e) => setNoteColor(e.target.value)}
              type="radio"
              id="color-1"
              name="color"
              value="#9eeb47"
            />
            <label htmlFor="color-1">
              <span>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                  alt="Checked Icon"
                />
              </span>
            </label>
          </div>

          <div>
            <input
              onChange={(e) => setNoteColor(e.target.value)}
              type="radio"
              id="color-2"
              name="color"
              value="#5bd1d7"
            />
            <label htmlFor="color-2">
              <span>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                  alt="Checked Icon"
                />
              </span>
            </label>
          </div>

          <div>
            <input
              onChange={(e) => setNoteColor(e.target.value)}
              type="radio"
              id="color-3"
              name="color"
              value="#f0bf4c"
            />
            <label htmlFor="color-3">
              <span>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                  alt="Checked Icon"
                />
              </span>
            </label>
          </div>

          <div>
            <input
              onChange={(e) => setNoteColor(e.target.value)}
              type="radio"
              id="color-4"
              name="color"
              value="#e74c3c"
            />
            <label htmlFor="color-4">
              <span>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                  alt="Checked Icon"
                />
              </span>
            </label>
          </div>
        </div>
        <div className="submit">
          <button className="btnSubmit"
          onClick={addNote}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
