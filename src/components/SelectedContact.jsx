import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";
import ContactList from "./contactList";
// import ContactList from "./contactList";

export default function SelectedContact({SelectedContactId, setSelectedContactId}) {
//    const [SelectedContactId, setSelectedContactId] = useState("");
   const [contact, setContact]= useState("");
   useEffect(() => {
   async function fetchContact() {
    try {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${SelectedContactId}`);
      const contactData = await response.json();
      setContact(contactData);
      console.log(contact);  
    } catch (error) {
      console.log(error); 
    }  
  }
  fetchContact();
}, [])
   return 
  
        // ContactList.map((contact) =>{
        //     return <p onClick={()=> {setSelectedContactId(contact.id)}} key={contact.id}>{contact.name}</p>   
        // }
           
        // )
    
   

}
