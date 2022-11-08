import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allNotes, destroy } from "../redux/notes/notesSlice";

function NoteList() {
  const dispatch = useDispatch();
  //const notes = useSelector(getAllNotes);
  //const notes = useSelector(state=>state.noteList.notesArr);
  
  const notes = useSelector(allNotes);
  const activeFilter = useSelector((state) => state.noteList.activeFilter);

  const filteredNotes = notes.filter((note) =>
    note.noteText.toLowerCase().includes(activeFilter.toLowerCase())
  );

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
      {filteredNotes.map((note) => (
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
