import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isModalOpen, closeModal, children }) => {
  if (!isModalOpen) return null;

  return createPortal(
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto min-h-[200px] z-50 w-[80%] max-w-[500px] p-4 flex flex-col justify-start bg-white">
        <div className="flex justify-end px-2">
          <div onClick={closeModal}>
            <AiOutlineClose className="text-2xl cursor-pointer" />
          </div>
        </div>
        {children}
      </div>
      <div  onClick={closeModal} className="backdrop-blur top-0 z-40 absolute h-screen w-screen bg-black bg-opacity-50"></div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
