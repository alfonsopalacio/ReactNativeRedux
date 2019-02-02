/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// Import a library to help create a component
import React from 'react';
import { Text , AppRegistry } from 'react-native';
import Header from './src/components/Header';


// Create a component
const App = () => (
  <Header headerText={'Albums'} />  //pasando el prop headerText
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
