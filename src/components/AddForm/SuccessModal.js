import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./success-modal.css";
const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundImage: "linear-gradient(to top,black, red)",
    
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully!</label>
        <img
          src={require("../../assets/images/added-image.png").default}
          alt="Expense Added"
          className="added-image"
        />
        <Link to="/">
          <button className="take-home-button">
            <i class="fas fa-home"></i>
            Home
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;