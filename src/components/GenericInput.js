import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 24,
    marginVertical: 12
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    width: 100,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5
  }
});

const GenericInput = ({ placeholder, type, value, onChangeText }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={text => onChangeText(text, type)}
      value={value}
    />
  </View>
);

export default GenericInput;
