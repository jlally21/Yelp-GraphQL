import React from 'react';
import { View, Text, StyleSheet, Button, Linking, Image } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    margin: 5,
    paddingTop: 10,
    borderColor: 'rgba(0, 0, 0, .5)',
    borderTopWidth: 0.5,
    alignItems: 'center'
  },
  titleText: { fontSize: 18, fontWeight: 'bold' },
  image: { width: 66, height: 58 },
  buttonsContainer: { flexDirection: 'row', alignItems: 'center' },
  margin10: { margin: 10 }
});

const SearchResultsList = ({ businesses }) => (
  <View>
    {businesses.map(business => {
      const { id, name, phone, url, photos } = business;
      const photo = photos[0]; // use the first photo
      return (
        <View key={id} style={styles.itemContainer}>
          <Text style={styles.titleText}>{name}</Text>
          <Image source={{ uri: photo }} style={styles.image} />
          <View style={styles.buttonsContainer}>
            <View style={styles.margin10}>
              <Button title="Call" onPress={() => Linking.openURL(`tel:${phone}`)} />
            </View>
            <View style={styles.margin10}>
              <Button title="Website" onPress={() => Linking.openURL(url)} />
            </View>
          </View>
        </View>
      );
    })}
  </View>
);

export default SearchResultsList;
