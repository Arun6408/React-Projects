import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/addAndUpdateContact";
import useDisclouse from "./config/hooks/useDisclouse";
import NotFound from "./components/notFound";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const {isModalOpen,closeModal,openModal} = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        
        onSnapshot(contactsRef,(snapshot)=>{
          
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(data);
          return data;
        })
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e)=>{
    const value=e.target.value;
    try {
      const contactsRef = collection(db, "contacts");
      
      onSnapshot(contactsRef,(snapshot)=>{
        
        const contacts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));
        setContacts(filteredContacts);
        return filteredContacts;
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-[370px] mx-auto">
      <Navbar />
      <div className="flex relative items-center gap-2">
        <FiSearch className="absolute ml-1 text-3xl text-white" />
        <input
          onChange={filterContacts}
          type="text"
          className="pl-9 text-white flex-grow h-10 bg-transparent border border-white rounded-md"
        />
        <AiFillPlusCircle
          onClick={openModal}
          className="text-5xl text-white cursor-pointer"
        />
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {contacts.length === 0 ?<NotFound/> : contacts.map((contact) => (
          <ContactCard isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} key={contact.id} contact={contact} />
        ))}
      </div>
      <AddAndUpdateContact isModalOpen={isModalOpen} closeModal={closeModal} />
      <ToastContainer
       position="bottom-center"
      />
    </div>
  );
};

export default App;
