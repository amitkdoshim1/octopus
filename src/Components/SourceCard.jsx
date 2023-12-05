// SourceCard.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../App';
import '../Style/SourceCard.css'; // Import your CSS file

const SourceCard = () => {
  const { jsonData } = useContext(MyContext);
  const { id } = useParams();

  // Find the data for the selected targetHeb
  const selectedData = jsonData.find((item) => item.target === id);

  if (!selectedData) {
    return <div className="source-card">Data not found</div>;
  }

  return (
    <div className="source-card">
      <h2>{selectedData.target_heb}</h2>
      <p>
        <strong>Platform:</strong> {selectedData.platform}
      </p>
      <p>
        <strong>Target:</strong> {selectedData.target}
      </p>
      <p>
        <strong>Category:</strong> {selectedData.category}
      </p>
      <p>
        <strong>Organization:</strong> {selectedData.organization}
      </p>
      <p>
        <strong>Group size:</strong> {selectedData.group_size}
      </p>
      <p>
        <strong>URL:</strong> {selectedData.url}
      </p>
      <p>
        <strong>Comments:</strong> {selectedData.comments}
      </p>
      <p>
        <strong>Arena:</strong> {selectedData.arena}
      </p>
      <p>
        <strong>Description:</strong> {selectedData.description}
      </p>
    </div>
  );
};

export default SourceCard;
