import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";
import CreateArea from "./components/CreateArea/CreateArea";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App preview-section">
     

      {/* <Header /> */}
     
      <div className="notes-section">
        <ul className="notes-list">
          {notes.map((noteItem, index) => {
            return (
              <li >
                <Note className="notes-section note-item"
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              </li>
            );
          })}
        </ul>
        <button className="add-btn">+</button>
      </div>
      <CreateArea onAdd={addNote} />
      {/* <Footer /> */}
    </div>
    
  );
}

export default App;
