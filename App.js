import React from 'react';
import {SafeAreaView, View, Text, StatusBar, FlatList} from 'react-native';
import ProfileThumb from './components/ProfileThumb';

const Header = () => (
  <View>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>NamePad</Text>
  </View>
);

const profiles = [
  {uri: 'https://via.placeholder.com/150.png', name: 'Jeff', id: 0},
  {uri: 'https://via.placeholder.com/150.png', name: 'Bart', id: 1},
  {uri: 'https://via.placeholder.com/150.png', name: 'Nizar', id: 2},
  {uri: 'https://via.placeholder.com/150.png', name: 'Mikko', id: 3},
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{paddingHorizontal: 30}}>
          <Header />
          <FlatList
            data={profiles}
            renderItem={({item}) => <ProfileThumb {...item} />}
            horizontal={false}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-around',
              paddingBottom: 30,
            }}
            style={{paddingVertical: 30}}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
