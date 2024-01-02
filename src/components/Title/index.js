import React from 'react'
import { Text } from 'react-native';
import { titleStyles } from './styles';

const Title = ({ title, style }) => {
  return <Text style={[titleStyles.title, style]}>{title}</Text>;
}

export default Title;
