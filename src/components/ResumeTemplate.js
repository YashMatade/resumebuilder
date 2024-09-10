import React from "react";

const ResumeTemplate = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className="resume-section">
          <h2>{section.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplate;
