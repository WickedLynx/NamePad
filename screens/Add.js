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
        alignItems: 'center',
        bottom: 0,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        left: 0,
        padding: 30,
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      <TextInput
        style={{
          backgroundColor: 'rgba(50, 50, 50, 0.5)',
          borderColor: 'gray',
          borderRadius: 8,
          borderWidth: 1,
          color: 'white',
          height: 44,
          paddingHorizontal: 16,
          width: '100%',
        }}
        placeholder="Name"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity
        style={{
          borderColor: 'white',
          borderRadius: 30,
          borderWidth: 8,
          height: 60,
          marginTop: 32,
          width: 60,
        }}
      />
    </View>
  </View>
);

Add.navigationOptions = {
  title: 'Add Profile',
};

export default Add;
