//import
import React from 'react';
import { Text, View } from 'react-native';

//Create component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#12F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
//Make component available to other parts
export default Header;
