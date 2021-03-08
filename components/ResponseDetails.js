import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ResponseDetails = () => {
  const response = useSelector(state => state.selectedRespose);
  console.log(response);
  return (
      <View>
        <Text>Hello {response.response}</Text>
      </View>
  );
}

export default ResponseDetails