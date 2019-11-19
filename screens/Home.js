import React from 'react';
import {SafeAreaView, View, StatusBar, FlatList, Button} from 'react-native';
import ProfileThumb from '../components/ProfileThumb';

const profiles = [
  {uri: 'https://via.placeholder.com/150.png', name: 'Jeff', id: 0},
  {uri: 'https://via.placeholder.com/150.png', name: 'Bart', id: 1},
  {uri: 'https://via.placeholder.com/150.png', name: 'Nizar', id: 2},
  {uri: 'https://via.placeholder.com/150.png', name: 'Mikko', id: 3},
];

export const Home = props => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <View style={{paddingHorizontal: 30}}>
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
        <Button title="add" onPress={() => props.navigation.navigate('Add')} />
      </View>
    </SafeAreaView>
  </>
);

Home.navigationOptions = {
  title: 'Profiles',
};

export default Home;
