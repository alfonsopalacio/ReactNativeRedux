

// Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;  // usando Destructuring

  return (
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        );
  };

//justifyContent: 'flex-end'  ALINEACIÓN VERTICAL
//alignItems: 'flex-end'  ALINEACIÓN HORIZONTAL
// 'flex-end' 'center'  'flex-start'

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    //shadow stiling
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 40 },  //ancho , altura
    shadowOpacity: 0.9,   //oscuridad de la sombra
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app.
export default Header;
