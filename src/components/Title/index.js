import React from 'react'
import { Text } from 'react-native';
import { titleStyles } from './styles';

const Title = ({ title }) => {
  return (
    <Text style={titleStyles.title}>{title}</Text>
  )
}

export default Title;
