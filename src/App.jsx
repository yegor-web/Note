import React from 'react';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { NoteContext, SideContext } from './Contex';

function App() {
  const [noteText, setNoteText] = useState('')
  const [noteDescription, setNoteDescription] = useState('')
  return (
    <div className="App">
      <SideContext.Provider value={{ noteDescription, setNoteDescription }}>
        <NoteContext.Provider value={{ noteText, setNoteText }}>
          <Sidebar />
        </NoteContext.Provider>
      </SideContext.Provider>
    </div>
  );
}

export default App;

