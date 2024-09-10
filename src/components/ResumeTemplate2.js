import React from "react";

const ResumeTemplate2 = ({ sections }) => (
  <div>
    {/* Render sections in template 2 style */}
    {sections.map((section, index) => (
      <div key={index}>
        <h3>{section.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: section.content }} />
      </div>
    ))}
  </div>
);

export default ResumeTemplate2;
