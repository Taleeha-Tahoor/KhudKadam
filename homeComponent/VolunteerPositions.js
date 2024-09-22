import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VolunteerPositions = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: 'Supervisor' },
    { id: 2, label: 'Funder' },
    { id: 3, label: 'Service Provider' },
    { id: 4, label: 'Volunteer' },
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Volunteering Position</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionContainer}
          onPress={() => handleSelect(option.id)}
        >
          <View style={styles.radioButton}>
            {selectedOption === option.id && <View style={styles.radioButtonSelected} />}
          </View>
          <Text style={styles.optionLabel}>{option.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.enrollButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.enrollButtonText}>Enroll Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  optionLabel: {
    fontSize: 16,
  },
  enrollButton: {
    backgroundColor: '#4CAF50', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20, 
  },
  enrollButtonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VolunteerPositions;