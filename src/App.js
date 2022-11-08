import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import NoteList from './components/NoteList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     <Header/>
     <Search/>
     <Form/>
     <NoteList/>
    </div>
  );
}

export default App;
