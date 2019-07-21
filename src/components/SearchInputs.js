import React from 'react';
import { Text, Button, TouchableOpacity, Picker, StyleSheet } from 'react-native';
import GenericInput from './GenericInput';

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: 'lightgreen',
    marginHorizontal: 32,
    marginVertical: 16,
    padding: 12,
    borderRadius: 24,
    borderColor: 'black',
    borderWidth: 1
  },
  searchButtonText: {
    textAlign: 'center'
  },
  categoryLabelText: {
    textAlign: 'center'
  },
  picker: {
    width: 200,
    alignSelf: 'center'
  }
});

const SearchInputs = ({
  categorySelected,
  categorySelectionEnabled,
  locationInput,
  termInput,
  searchEnabled,
  onHandleInput,
  onDisplayCategorySelection,
  onCategorySelect,
  onSearch
}) => (
  <React.Fragment>
    <GenericInput
      placeholder="Search for food, shops, fun, etc."
      type="termInput"
      value={termInput}
      onChangeText={onHandleInput}
    />
    <GenericInput
      placeholder="Where?"
      type="locationInput"
      value={locationInput}
      onChangeText={onHandleInput}
    />
    {categorySelected && (
      <Text style={styles.categoryLabelText}>{`CATEGORY: ${categorySelected.toUpperCase()}`}</Text>
    )}
    {categorySelectionEnabled ? (
      <Picker
        selectedValue={categorySelected}
        style={styles.picker}
        onValueChange={itemValue => onCategorySelect(itemValue)}
      >
        <Picker.Item label="Food" value="food" />
        <Picker.Item label="Games" value="games" />
        <Picker.Item label="Shops" value="shops" />
      </Picker>
    ) : (
      <Button title="Choose a category" onPress={onDisplayCategorySelection} />
    )}
    <TouchableOpacity
      style={styles.searchButton}
      title={'Search'}
      onPress={onSearch}
      disabled={!searchEnabled}
    >
      <Text style={styles.searchButtonText}>SEARCH</Text>
    </TouchableOpacity>
  </React.Fragment>
);

export default SearchInputs;
