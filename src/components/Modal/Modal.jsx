import { useGlobalContext } from "../../context/context";
import "./Modal.css";

const Modal = ({ children }) => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className={`modal ${isModalOpen ? 'd-grid' : 'd-none'}`}>
      <div className="modal-container">
        <div className="text-end">
          <button onClick={closeModal} className="btn btn-sm btn-danger">
            Close
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
