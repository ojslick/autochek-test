import React from "react";

import "./permit.css";

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
  return (
    <div className="permit-container">
      <h1>Permit Type: {data.permit_type}</h1>
      <h2>Issue Date: {data.issue_date}</h2>
    </div>
  );
};

export default Permit;
