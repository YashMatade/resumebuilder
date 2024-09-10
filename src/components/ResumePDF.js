// ResumePDF.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
  },
});

const ResumePDF = ({ sections }) => (
  <Document>
    <Page style={styles.page}>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.title}>{section.title}</Text>
          <Text style={styles.content}>{section.content}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default ResumePDF;
