
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>Album List !!!</Text>
      </View>
    );
  }
}

export default AlbumList;


/*
Lifecycle methods
Lifecycle methods are hooks which allow execution of code at set points during the component's lifetime.

shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.
componentDidMount is called once the component has 'mounted' (the component has been created in the user interface, often by associating it with a DOM node). This is commonly used to trigger data loading from a remote source via an API.
componentWillUnmount is called immediately before the component is tore down or 'unmounted'. This is commonly used to clear resource demanding dependencies to the component that will not simply be removed with the unmounting of the component (e.g. removing any 'setInterval()' instances that are related to the component, or an 'eventListener' set on the 'document' because of the presence of the component)
render is the most important lifecycle method and the only required one in any component. It is usually called every time the component's state is updated, reflecting changes in the user interface.
*/
