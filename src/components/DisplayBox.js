import React from 'react';
import {View, Text} from 'react-native';

export default class DisplayBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText : this.props.displayText
    };
  }
  render() {
    return ( <View>
        <Text>{this.state.displayText}</Text>
      </View>);
  }
}