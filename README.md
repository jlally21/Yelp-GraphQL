## Yelp Client which leverages GraphQL API

### Functionality
Enables search from user provided input (terms and location).  Also enables the use of Geolocation to determine latitude/longitude of user's device, and will make use of geolocation if user does not provide a location input.  Provides user the ability to narrow search from a list of categories via dropdown.  Once search results are returned via Yelp GraphQL API, the user is able to view the results via a list view or map view, and can switch between these views from clicking the corresponding buttons (List View or Map View).  List View provides user ability to call the phone number associated with the result or redirect to the associated website.  Pros of this design approach include ability for user to narrow down results based off category, see where the results are via map, and provide 1-click contact to a result from phone call.  Search is also optimized by making use of Apollo Client cache so no duplicate network requests are made.  Cons of implemented approach include inability to select more than 1 category, limit of 10 results per search, not optimal initial map view (if results are geographically spread out, particularly on Android's Google Maps), lack of reviews, lack of driving directions to points of interest for user, etc.  This app could definitely be extended further!

### Steps to run project locally
1. From React Native docs (https://facebook.github.io/react-native/docs/getting-started), click “React Native CLI Quickstart” tab and install required dependencies. Depending on your OS, installation of dependencies can be different.  Along with Node (use nvm to access Node.js v8.16.0), Watchman, JDK, Xcode, and Android Studio, make sure you have access to the `react-native` CLI
2. clone the repo and `cd` to the repo
3. execute `npm install` from root of repository
4. To run on iOS simulator, execute `react-native run-ios` from root of repository
5. To run on Android emulator, launch an emulator on your host machine, then execute `react-native run-android` from root of repository

