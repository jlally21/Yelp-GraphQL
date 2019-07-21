import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItemText: { margin: 10 }
});

const SearchResultsList = ({ businesses }) => (
  <View>
    {businesses.map(business => (
      <Text style={styles.listItemText} key={business.name}>
        {business.name}
      </Text>
    ))}
  </View>
);

export default SearchResultsList;
