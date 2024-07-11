import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./addAndUpdateContact";
import useDisclouse from "../config/hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {

  const {isModalOpen,closeModal,openModal} = useDisclouse();

    const deleteContact = async (contactId) => {
        try {
            const contactDocRef = doc(db, "contacts", contactId);
            await deleteDoc(contactDocRef);
            toast.success("Contact deleted successfully");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div
                key={contact.id}
                className="rounded-lg bg-yellow flex items-center justify-between p-2"
            >
                <div className="flex text-black gap-2">
                    <HiOutlineUserCircle className="text-orange text-4xl" />
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">{contact.name}</h2>
                        <p className="font-medium">{contact.email}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <RiEditCircleLine
                        onClick={openModal}
                        className="text-2xl text-black cursor-pointer"
                    />
                    <IoMdTrash
                        onClick={() => deleteContact(contact.id)}
                        className="text-2xl text-purple cursor-pointer"
                    />
                </div>
            </div>
                <AddAndUpdateContact
                    isUpdate
                    contact={contact}
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                />
        </>
    );
};

export default ContactCard;
