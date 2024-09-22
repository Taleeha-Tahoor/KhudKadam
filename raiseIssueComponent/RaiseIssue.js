import React, { useState } from 'react';
import { View, TextInput, Alert, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

export default function IssueForm() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    image: '',
  });

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleIssue = async () => {
  try {
      const response = await axios.post('http://192.168.18.68:5001/issue/raiseIssue',
          formData,
          { headers: { 'Content-Type': 'application/json' } });
      if (response.status === 200) {
          Alert.alert(response?.data?.message);
          navigation.navigate('Home');
      }
  } catch (error) {
      console.error(error);
      Alert.alert('Failed to raise issue', error.response?.data?.message || 'An error occurred');
  }
};

  return (

    <View style={styles.container}>
      <TextInput onChangeText={text => handleInputChange('title', text)} 
       value={formData.title} placeholder="Title" style={styles.textInput} />

      <TextInput onChangeText={text => handleInputChange('description', text)}
       value={formData.description} placeholder="Description" style={styles.textInput} />

      <TextInput onChangeText={text => handleInputChange('category', text)}
       value={formData.category} placeholder="Category" style={styles.textInput} />

      <TextInput onChangeText={text => handleInputChange('location', text)}
       value={formData.location} placeholder="Location" style={styles.textInput} />

      <TextInput onChangeText={text => handleInputChange('image', text)}
       value={formData.image} placeholder="Image" style={styles.textInput} />
      
      {/* <Image onChangeText={text => handleInputChange('image', text)}  
        value={formData.image}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjvFIN_2wzrCl9V4flNp6uA9_vuF1gDc6W7pBptS23qWCQMYrV12jt1iH6tsJ6KIuC4k&usqp=CAU' }}
        style={styles.image}
      /> */}
      <Button title="Submit" onPress={handleIssue} style={styles.submitButton} />
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