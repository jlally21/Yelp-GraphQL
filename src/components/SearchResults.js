import React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import SearchResultsList from './SearchResultsList';
import SearchResultsMap from './SearchResultsMap';
import { SEARCH } from '../utils/queries';

const styles = StyleSheet.create({
  resultsContainer: { marginTop: 24 },
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
    let { term, location, latitude, longitude, category, limit = 10 } = this.props;
    if (location) {
      latitude = longitude = null; // location input overrides lat/long
    }
    return (
      <Query
        query={SEARCH}
        variables={{ term, location, latitude, longitude, categories: category, limit }}
      >
        {search => {
          const { loading, error, data } = search;
          if (loading) return <ActivityIndicator style={styles.resultsContainer} />;
          if (error) return <Text style={styles.resultsContainer}> Network Error :(</Text>;
          if (data.search) {
            const { total, business: businesses } = data.search;
            if (total === 0) {
              return <Text>No results found</Text>;
            }
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
          }
          return null;
        }}
      </Query>
    );
  }
}
