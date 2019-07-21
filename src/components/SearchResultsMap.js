import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  mapContainer: { position: 'relative', height: 300 },
  mapView: { left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }
});

const SearchResultsMap = ({ businesses }) => {
  const business1Location = businesses[0].coordinates;
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          ...business1Location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {businesses.map(business => (
          <Marker
            key={business.id}
            coordinate={{
              latitude: business.coordinates.latitude,
              longitude: business.coordinates.longitude
            }}
            title={business.name}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SearchResultsMap;
