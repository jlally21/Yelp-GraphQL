import React from 'react';
import { View, Text, Button, TouchableOpacity, Picker, StyleSheet } from 'react-native';
import GenericInput from './GenericInput';
import categories from '../utils/categories';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d32323'
  },
  searchButton: {
    backgroundColor: '#0073bb',
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
  categoryButton: {
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  categoryLabelText: {
    alignSelf: 'center',
    padding: 10
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
  <View style={styles.container}>
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
        <Picker.Item label={'None'} value={null} />
        {categories.map(category => (
          <Picker.Item label={category.title} value={category.alias} key={category.title} />
        ))}
      </Picker>
    ) : (
      <TouchableOpacity onPress={onDisplayCategorySelection} style={styles.categoryButton}>
        <Text>Choose a Category</Text>
      </TouchableOpacity>
    )}
    <TouchableOpacity
      style={styles.searchButton}
      title={'Search'}
      onPress={onSearch}
      disabled={!searchEnabled}
    >
      <Text style={styles.searchButtonText}>SEARCH</Text>
    </TouchableOpacity>
  </View>
);

export default SearchInputs;
