import {
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import React, {Component} from 'react';

const PersonInput = ({camera, setCapturedImageUri}) => (
  <>
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          width: '100%',
          padding: 30,
          alignItems: 'center',
          paddingBottom: 120,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(50, 50, 50, 0.5)',
            borderColor: 'gray',
            borderRadius: 8,
            borderWidth: 1,
            width: '100%',
          }}>
          <TextInput
            selectionColor="rgb(200,200,200)"
            returnKeyType="next"
            style={{
              fontSize: 18,
              color: 'white',
              height: 44,
              paddingHorizontal: 16,
            }}
            placeholder="Name"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
    <View
      style={{
        alignItems: 'center',
        bottom: 30,
        position: 'absolute',
        width: '100%',
      }}>
      <TouchableOpacity
        style={{
          borderColor: 'white',
          borderRadius: 30,
          borderWidth: 8,
          height: 60,
          width: 60,
        }}
        onPress={async () => {
          if (typeof camera === 'undefined') {
            return;
          }
          const options = {quality: 0.5, base64: true};
          const data = await camera.takePictureAsync(options);
          console.log('our data', Object.keys(data));
          setCapturedImageUri(data.uri);
        }}
      />
    </View>
  </>
);

class Add extends Component {
  static navigationOptions = {
    title: 'Add Profile',
  };

  state = {
    capturedImageUri: null,
  };

  setCapturedImageUri = uri => {
    this.setState({
      capturedImageUri: uri,
    });
  };

  render() {
    const {capturedImageUri} = this.state;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'black',
        }}>
        {capturedImageUri ? (
          <View>
            <Image source={{uri: capturedImageUri}} />
            <PersonInput />
          </View>
        ) : (
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
            }}>
            {({camera, status, recordAudioPermissionStatus}) =>
              status !== 'READY' ? (
                <View style={{backgroundColor: 'red'}} />
              ) : (
                <PersonInput
                  camera={camera}
                  setCapturedImageUri={this.setCapturedImageUri}
                />
              )
            }
          </RNCamera>
        )}
      </View>
    );
  }
}

export default Add;
