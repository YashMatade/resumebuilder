// Preview.js
import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import ResumeTemplate1 from './ResumeTemplate';
import ResumeTemplate2 from './ResumeTemplate2';
import ResumePDF from './ResumePDF';
import { PDFViewer } from '@react-pdf/renderer';
import styled from 'styled-components';

const PrintButton = styled.button`
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

const TemplateSelector = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
`;

const Preview = ({ sections }) => {
  const componentRef = React.useRef();
  const [printStyle, setPrintStyle] = useState('default');
  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: auto;
        margin: 15mm 20mm 15mm 20mm;
      }
      body {
        font-family: Arial, sans-serif;
      }
    `,
  });

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  let TemplateComponent;
  switch (selectedTemplate) {
    case 'template2':
      TemplateComponent = ResumeTemplate2;
      break;
    case 'template1':
    default:
      TemplateComponent = ResumeTemplate1;
      break;
  }

  return (
    <div>
      <TemplateSelector onChange={handleTemplateChange}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
      </TemplateSelector>
      <div ref={componentRef}>
        <TemplateComponent sections={sections} />
      </div>
      <PrintButton onClick={handlePrint}>Print Resume</PrintButton>
      <h3>PDF Preview:</h3>
      <PDFViewer width="100%" height="600">
        <ResumePDF sections={sections} />
      </PDFViewer>
    </div>
  );
};

export default Preview;
