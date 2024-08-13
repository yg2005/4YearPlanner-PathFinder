// src/components/PDFPreview.jsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    marginBottom: 5,
  },
});

const PDFPreview = ({ recommendations }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Recommended 8-Semester Schedule</Text>
          {recommendations.map((semester, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.header}>Semester {index + 1}</Text>
              {semester.courses.map((course, idx) => (
                <Text key={idx}>
                  {course.title} - {course.credits} credits
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const PDFDownload = ({ recommendations }) => (
  <PDFDownloadLink document={<PDFPreview recommendations={recommendations} />} fileName="recommendations.pdf">
    {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
  </PDFDownloadLink>
);

export default PDFDownload;
