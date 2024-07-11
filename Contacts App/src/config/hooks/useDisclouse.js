import { useState } from "react";

const useDisclouse = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return {isModalOpen,closeModal,openModal}
}

export default useDisclouse