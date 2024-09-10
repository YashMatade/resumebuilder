// BuilderPage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Preview from "../components/Preview";
import QuillEditor from "../components/SummernoteEditor";

const BuilderContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const sectionsData = [
  { title: "Personal Information", content: "" },
  { title: "Education", content: "" },
  { title: "Experience", content: "" },
  { title: "Skills", content: "" },
];

const BuilderPage = () => {
  const [sections, setSections] = useState(sectionsData);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(sectionsData[0].content);

  useEffect(() => {
    const updatedSections = sections.map((section, index) =>
      index === currentSectionIndex
        ? { ...section, content: currentContent }
        : section
    );
    setSections(updatedSections);
  }, [currentContent]);

  const handleSectionChange = (content) => {
    setCurrentContent(content);
  };

  const handleSelectSection = (title) => {
    const updatedSections = sections.map((section, index) =>
      index === currentSectionIndex
        ? { ...section, content: currentContent }
        : section
    );
    setSections(updatedSections);
    const newIndex = sections.findIndex((sec) => sec.title === title);
    setCurrentSectionIndex(newIndex);
    setCurrentContent(sections[newIndex].content);
  };

  const handleAddSection = () => {
    const newTitle = prompt("Enter the title for the new section:");
    if (newTitle) {
      const newSection = { title: newTitle, content: "" };
      const updatedSections = [...sections, newSection];
      setSections(updatedSections);
      setCurrentSectionIndex(updatedSections.length - 1);
      setCurrentContent("");
    }
  };

  const handleDeleteSection = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
    if (index === currentSectionIndex && updatedSections.length > 0) {
      setCurrentSectionIndex(0);
      setCurrentContent(updatedSections[0].content);
    } else if (updatedSections.length === 0) {
      setCurrentSectionIndex(0);
      setCurrentContent("");
    } else {
      const newIndex = index === 0 ? 0 : currentSectionIndex - 1;
      setCurrentSectionIndex(newIndex);
      setCurrentContent(updatedSections[newIndex]?.content || "");
    }
  };

  const currentSection = sections[currentSectionIndex] || {};

  return (
    <BuilderContainer>
      <Sidebar
        sections={sections.map((section) => section.title)}
        currentSection={currentSection.title || ""}
        onSelectSection={handleSelectSection}
        onDeleteSection={handleDeleteSection}
      />
      <ContentContainer>
        <h2>{currentSection.title || "Select a section"}</h2>
        <QuillEditor content={currentContent} onChange={handleSectionChange} />
        <AddButton onClick={handleAddSection}>Add Section</AddButton>
        <Preview sections={sections} />
      </ContentContainer>
    </BuilderContainer>
  );
};

export default BuilderPage;
