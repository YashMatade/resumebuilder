import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 200px;
  background: #f4f4f4;
  padding: 20px;

  ul {
    list-style: none;
    padding: 0;
  }
`;

const SidebarListItem = styled.li`
  cursor: pointer;
  padding: 5px 0;
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  background-color: ${({ isSelected }) =>
    isSelected ? "#007bff" : "transparent"};
  border-radius: 5px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#0056b3" : "#ddd")};
  }
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;

  &:hover {
    color: darkred;
  }
`;

const Sidebar = ({
  sections,
  currentSection,
  onSelectSection,
  onDeleteSection,
}) => {
  return (
    <SidebarContainer>
      <ul>
        {sections.map((section, index) => (
          <SidebarListItem
            key={index}
            isSelected={section === currentSection}
            onClick={() => onSelectSection(section)}
          >
            {section}
            <DeleteButton
              onClick={(e) => {
                e.stopPropagation();
                onDeleteSection(index);
              }}
            >
              &times;
            </DeleteButton>
          </SidebarListItem>
        ))}
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
