import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Add = () => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    }}>
    <RNCamera
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      onGoogleVisionBarcodesDetected={({barcodes}) => {
        console.log(barcodes);
      }}
    />
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
        justifyContent: 'space-between',
        height: 200,
      }}>
      <TextInput
        style={{
          height: 44,
          width: '100%',
          backgroundColor: 'rgba(50, 50, 50, 0.5)',
          borderColor: 'gray',
          borderRadius: 8,
          borderWidth: 1,
          color: 'white',
          paddingHorizontal: 16,
        }}
        placeholder="Name"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          borderWidth: 8,
          borderColor: 'white',
        }}
      />
    </View>
  </View>
);

Add.navigationOptions = {
  title: 'Add Profile',
};

export default Add;
