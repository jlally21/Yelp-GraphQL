import React, { Fragment } from 'react';
import { ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SearchResults from '../../components/SearchResults';
import SearchInputs from '../../components/SearchInputs';
import withLocation from '../../components/HOC/Location';

const styles = StyleSheet.create({
  scrollViewContainer: { margin: 10, backgroundColor: 'lightgrey' }
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorySelected: null,
      categorySelectionEnabled: false,
      locationInput: null,
      locationSearch: null,
      termInput: null,
      termSearch: null,
      searched: false
    };
  }

  handleInput = (value, type) => {
    this.setState({ [type]: value });
  };

  handleSearch = () => {
    const { termInput, locationInput } = this.state;
    this.setState({
      locationSearch: locationInput,
      termSearch: termInput,
      searched: true
    });
  };

  handleDisplayCategorySelection = () => {
    const { categorySelectionEnabled } = this.state;
    this.setState({ categorySelectionEnabled: !categorySelectionEnabled });
  };

  handleCategorySelect = categorySelected => {
    this.setState({ categorySelected }, this.handleDisplayCategorySelection);
  };

  render() {
    const { currentLatitude, currentLongitude } = this.props;
    const { termSearch, locationInput, locationSearch, searched } = this.state;
    const searchEnabled = !!(currentLongitude && currentLatitude) || !!locationInput;

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView style={styles.scrollViewContainer}>
            <SearchInputs
              {...this.state}
              searchEnabled={searchEnabled}
              onHandleInput={this.handleInput}
              onDisplayCategorySelection={this.handleDisplayCategorySelection}
              onCategorySelect={this.handleCategorySelect}
              onSearch={this.handleSearch}
            />
            {searched && (
              <SearchResults
                term={termSearch}
                location={locationSearch}
                latitude={currentLatitude}
                longitude={currentLongitude}
              />
            )}
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default withLocation(Home);
