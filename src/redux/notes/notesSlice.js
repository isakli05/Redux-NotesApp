import { createSlice, nanoid } from "@reduxjs/toolkit";
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesArr: JSON.parse(localStorage.getItem("notes")) || [],
  },
  reducers: {
    addNewNote: {
      reducer: (state, action) => {
        state.notesArr.push(action.payload);
      },
      prepare: ({ noteText, noteColor }) => {
        return {
          payload: {
            id: nanoid(),
            noteText,
            noteColor,
          },
        };
      },
    },

    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.notesArr.filter((note) => note.id !== id);
      state.notesArr = filtered;
    },

    getAllNotes: (state, action) => {
      return state.notesArr.filter((item) =>
        item.noteText.includes(action.payload)
      );
    },
  },
});

export const allNotes = (state) => state.noteList.notesArr;
export const { addNewNote, getAllNotes, destroy } = notesSlice.actions;
export default notesSlice.reducer;
