/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Presentation from './components/presentation';

class RateMyPrezie extends Component {
  render() {
    return (
        <Presentation></Presentation>
    );
  }
}

AppRegistry.registerComponent('RateMyPrezie', () => RateMyPrezie);
