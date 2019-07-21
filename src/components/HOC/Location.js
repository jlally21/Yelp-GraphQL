import React from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

// Borrowed from https://aboutreact.com/react-native-geolocation/
const Location = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentLongitude: null, //Initial Longitude
        currentLatitude: null //Initial Latitude
      };
      this.watchID = null;
    }

    componentDidMount = () => {
      if (Platform.OS === 'ios') {
        this.callLocation();
      } else {
        this.requestLocationPermission();
      }
    };

    componentWillUnmount = () => {
      navigator.geolocation.clearWatch(this.watchID);
    };

    callLocation = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const currentLongitude = JSON.stringify(position.coords.longitude);
          const currentLatitude = JSON.stringify(position.coords.latitude);
          this.setState({ currentLongitude, currentLatitude });
        },
        error => alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      this.watchID = navigator.geolocation.watchPosition(position => {
        console.log('watching position...');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        this.setState({ currentLongitude, currentLatitude });
      });
    };

    requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location'
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          this.callLocation();
        } else {
          alert('Permission Denied');
        }
      } catch (err) {
        alert('err', err);
        console.warn(err);
      }
    };

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };

export default Location;
