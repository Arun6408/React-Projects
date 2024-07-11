import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email")
})


const AddAndUpdateContact = ({ isUpdate, contact, isModalOpen, closeModal }) => {

    const addContact = async (currContact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, currContact);
            closeModal();
            toast.success("Contact added successfully");
        } catch (error) {
            console.log(error);
        }
    };

    
    const updateContact = async (currContact) => {
        try {
            console.log(currContact);
            const contactDocRef = doc(db, "contacts", contact.id);
            await updateDoc(contactDocRef, currContact);
            closeModal();
            toast.success("Contact updated successfully");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
            <Formik
                validationSchema={contactValidationSchema}
                enableReinitialize
                initialValues={
                    isUpdate && contact ? {
                        name: contact.name,
                        email: contact.email
                    } : {
                        name: "",
                        email: ""
                    }
                }
                onSubmit={(values) => isUpdate ? updateContact(values) : addContact(values)}
            >
                <Form>
                    <div className="flex flex-col items-baseline mb-4">
                        <label htmlFor="name" className="mb-1">
                            Name
                        </label>
                        <Field
                            type="text"
                            className="border border-black w-[80%]"
                            name="name"
                            id="name"
                        />
                        <div className="text-xs text-red font-normal">
                            <ErrorMessage name="name"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-baseline mb-4">
                        <label htmlFor="email" className="mb-1">
                            Email
                        </label>
                        <Field
                            type="email"
                            className="border border-black w-[80%]"
                            name="email"
                            id="email"
                        />
                        <div className="text-xs  text-red font-normal">
                            <ErrorMessage name="email"/>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-lightorange border border-black rounded-md px-3 py-1.5"
                        >
                            {isUpdate ? "Update" : "Add"} Contact
                        </button>
                    </div>
                </Form>
            </Formik>
        </Modal>
    );
};

export default AddAndUpdateContact;
