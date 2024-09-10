import React from 'react';

const ResumeSection = ({ title, content, onChange }) => {
  return (
    <div>
      <h2>{title}</h2>
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        rows="10"
        cols="50"
      />
    </div>
  );
};

export default ResumeSection;
