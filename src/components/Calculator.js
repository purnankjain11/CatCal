import React from 'react';
import {View} from 'react-native';
import DisplayBox from './DisplayBox';
import ButtonPanel from './ButtonPanel';

export default class Calculator extends React.Component {
  render() {
    return (<View>
      <DisplayBox />
      <ButtonPanel />
    </View>
  );
  }
}