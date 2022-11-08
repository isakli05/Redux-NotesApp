import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allNotes, destroy, getAllNotes } from "../redux/notes/notesSlice";

function NoteList() {
  const dispatch = useDispatch();
  //const notes = useSelector(getAllNotes);
  const notes = useSelector(allNotes);
  //const notes = useSelector(state=>state.noteList.notesArr);


  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id));
    }
  };
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div
          className="note"
          style={{ backgroundColor: `${note.noteColor}` }}
          key={note.id}
        >
          {note.noteText}
          <span className="destroy" onClick={() => handleDestroy(note.id)}>
            ✖
          </span>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
