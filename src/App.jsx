import React from 'react'
import ContactList from './components/contactList';
import  { useState } from "react";
import './App.css'
import SelectedContact from './components/SelectedContact';

function App() {
 const [ SelectedContactId, setSelectedContactId] = useState("");

  return (
    <>
        {SelectedContactId ? (
          <SelectedContact setSelectedContactId={setSelectedContactId} />
        ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
        )}
        
    </>
  );
}

export default App;

