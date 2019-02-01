

// Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = () => {

  const { textStyle, viewStyle } = styles;  // usando Destructuring

  return (
            <View style = {viewStyle}>
                <Text style={textStyle}>Albums</Text>
            </View>
        );
  };

//justifyContent: 'flex-end'  ALINEACIÓN VERTICAL
//alignItems: 'flex-end'  ALINEACIÓN HORIZONTAL
// 'flex-end' 'center'  'flex-start'

const styles = {
  viewStyle:{
    backgroundColor: '#F8#F8#F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15
  },
  textStyle:{
    fontSize: 20
  }
};

// Make the component available to other parts of the app.
export default Header;
