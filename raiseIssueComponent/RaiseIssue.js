import React from 'react';
import { View, TextInput, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function IssueForm() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" style={styles.textInput} />
      <TextInput placeholder="Description" style={styles.textInput} />
      <TextInput placeholder="Category" style={styles.textInput} />
      <TextInput placeholder="Location" style={styles.textInput} />
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjvFIN_2wzrCl9V4flNp6uA9_vuF1gDc6W7pBptS23qWCQMYrV12jt1iH6tsJ6KIuC4k&usqp=CAU' }}
        style={styles.image}
      />
      <Button title="Submit" onPress={() => navigation.navigate('Home')} style={styles.submitButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow container to fill entire view if needed
    padding: 20, // Add padding for spacing
  },
  textInput: {
    width: '100%', // Make input fields span the full width
    height: 40,
    padding: 10, // Add padding for better readability
    borderWidth: 1,
    borderColor: '#ccc', // Set a neutral border color
    borderRadius: 5, // Add rounded corners
    marginBottom: 10, // Add spacing between input fields
  },
  selectImageButton: {
    width: '100%', // Make button span the full width
    height: 40,
    backgroundColor: '#f0f0f0', // Set a light background color
    borderRadius: 5, // Add rounded corners
    marginBottom: 10, // Add spacing after button
  },
  image: {
    width: '100%', // Make image span the full width (adjust as needed)
    height: 200, // Adjust image height as desired
    marginBottom: 10, // Add spacing after image
  },
  submitButton: {
    width: '100%', // Make submit button span the full width
    height: 40,
    backgroundColor: '#4CAF50', // Use a green color for submit button
    color: '#fff', // Set white text color for better contrast
    borderRadius: 5, // Add rounded corners
  },
});