import { useDispatch} from "react-redux";
import { getAllNotes } from "../redux/notes/notesSlice";

function Search() {
  const dispacth = useDispatch();

  const handlechange = (e) => {
    dispacth((getAllNotes(e.target.value)));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={handlechange}
      />
    </div>
  );
}

export default Search;
