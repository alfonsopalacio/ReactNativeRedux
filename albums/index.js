/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// Import a Library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';  //Destructuring Imports


// Create a component
const App = () => (
  <Text>Some Text</Text>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
