import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

const QuillEditor = ({ content, onChange }) => {
  return (
    <ReactQuill
      value={content}
      onChange={onChange}
      modules={{
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          ['link', 'image', 'video'],
          ['clean']
        ],
      }}
      formats={[
        'header', 'font', 'list', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'link', 'image', 'video'
      ]}
      theme="snow"
    />
  );
};

export default QuillEditor;
