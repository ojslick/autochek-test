import React, { useState } from "react";
import Modal from "react-modal";

import "./permit.css";

Modal.setAppElement("#root");

interface data {
  data: {
    id: number;
    permit_type: string;
    contact_1_type: string;
    contact_1_name: string;
    contact_1_city: string;
    issue_date: string;
  };
}

const Permit: React.FC<data> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleModal}>
      <div className="permit-container">
        <h1>Permit Type: {data.permit_type}</h1>
        <h2>Issue Date: {data.issue_date}</h2>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <h2>Contact Name: {data.contact_1_name}</h2>
        <h2>Contact City: {data.contact_1_city}</h2>
        <h2>Contact Type: {data.contact_1_type}</h2>
        <h2>Issue Date: {data.issue_date}</h2>
        <h2>Permit Type: {data.permit_type}</h2>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
};

export default Permit;
