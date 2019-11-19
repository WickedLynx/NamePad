import React from 'react';
import {View, Image, Text} from 'react-native';

const ProfileThumb = ({uri, name}) => (
  <View style={{backgroundColor: 'blue'}}>
    <Image
      source={{uri: uri}}
      style={{
        width: 110,
        height: 110,
      }}
    />
    <Text
      style={{
        color: 'white',
        fontSize: 16,
        position: 'absolute',
        bottom: 10,
        right: 10,
      }}>
      {name}
    </Text>
  </View>
);

export default ProfileThumb;
