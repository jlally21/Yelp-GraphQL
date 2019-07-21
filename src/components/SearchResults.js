import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Query } from 'react-apollo';
import SearchResultsList from './SearchResultsList';
import SearchResultsMap from './SearchResultsMap';
import { SEARCH } from '../utils/queries';

const styles = StyleSheet.create({
  resultsContainer: { marginTop: 50 },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-evenly' }
});

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'list'
    };
  }

  handleSetView = displayType => {
    this.setState({ displayType });
  };

  render() {
    const { displayType } = this.state;
    let { term, location, latitude, longitude, limit = 3 } = this.props;
    if (location) {
      latitude = longitude = null; // location input overrides lat/long
    }
    return (
      <Query query={SEARCH} variables={{ term, location, latitude, longitude, limit }}>
        {search => {
          const { loading, error, data } = search;
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          const businesses = data.search.business;
          return (
            <View style={styles.resultsContainer}>
              <View style={styles.buttonsContainer}>
                <Button title="List View" onPress={() => this.handleSetView('list')} />
                <Button title="Map View" onPress={() => this.handleSetView('map')} />
              </View>
              {displayType === 'list' ? (
                <SearchResultsList businesses={businesses} />
              ) : (
                <SearchResultsMap businesses={businesses} />
              )}
            </View>
          );
        }}
      </Query>
    );
  }
}
