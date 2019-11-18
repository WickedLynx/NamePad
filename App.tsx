/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import ProfileThumb from './components/ProfileThumb';

const Header = () => (
  <View>
    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>NamePad</Text>
  </View>
)

const profiles = [
  { uri: "https://via.placeholder.com/150.png", name: "Jeff" },
  { uri: "https://via.placeholder.com/150.png", name: "Bart" }
]

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ paddingHorizontal: 30 }}>
        <Header />
        <FlatList
          data={profiles}
          renderItem={({item}) => <ProfileThumb {...item} />}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        >
        </FlatList>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
