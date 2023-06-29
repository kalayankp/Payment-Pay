
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, Button, TextInput, Linking, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MobileNoScreen({ navigation }) {

  const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const validateMobilenumber = (Mobilenumber) => {
    const MobilenumberRegex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
    return MobilenumberRegex.test(Mobilenumber);
  };
  const code = '+91 -'

  const getDataUsingPost = () => {

    fetch('http://192.168.1.5:7000/users/registerMobile', {
      method: 'POST',
      body: JSON.stringify({
        "mobile": username
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let otp = data.data.OTP;
        let newOTP = otp.toString();
        console.log(newOTP);
        let newTok = data.id
        let nTok = newTok.toString();
        if (data.status === true) {
          navigation.navigate('OtpScreen', {
            'itemId': nTok
          })
        }
        // console.log('nToken is---',token);
        // console.log('nToken is--->>',nTok);

        Alert.alert('OTP is', newOTP, [
          { text: 'OK' },
        ]);
      })
      .catch((err) => {
        alert('Please Enter Valid Mobile No')
        console.log("----", err.message);
      })
  };

  const onSubmit = () => {
    //  await AsyncStorage.setItem('tokens',newToken)
    // console.log('saved------------------',token)
    // if (username === '9876543222') {
    getDataUsingPost()
    validateMobilenumber()
    // } else {
    //   alert('Enter Valid Mobile No')
    // }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../assests/icons/ringpeIcons.png')} />

        <Text
          style={{
            marginTop: 22,
            margin: 20,
            marginLeft: 14,
            color: 'black',
            fontSize: 30,
          }}>
          Enter your mobile number
        </Text>

        <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: 'black', borderRadius: 22, marginTop: "1%", margin: 12 }}>
          <Text style={{ margin: 10, fontSize: 20, color: 'black' }}>{code}</Text>
          <TextInput onChangeText={(value) => setUsername(value)} placeholder="10 Digit Mobile No" maxLength={10} keyboardType="numeric" style={styles.textInputStyle} />
        </View>

        <View style={{ marginTop: 200, alignItems: 'center' }}>
          <Text style={{ margin: 10, fontSize: 16, }}>
            By proceeding,you are agreeing to wallet's App
            <TouchableOpacity
              onPress={() => { Linking.openURL('') }}
              style={{ marginTop: 7 }}>
              <Text style={{ color: 'blue', }}>
                Terms and Conditions &  Privacy Policy
              </Text>
            </TouchableOpacity>
          </Text>

          <TouchableOpacity onPress={onSubmit}
            style={styles.button}>
            <Text style={styles.buttonText}>Processed</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:21}}></View>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 1,

  },
  logo: {
    marginTop: -28,
    width: 240,
    height: 210,
    marginLeft: -32,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
  buttonStyle: {
    fontSize: 26,
    color: 'white',
    backgroundColor: '#DD7D5D',
    padding: 5,

  },
  buttonTextStyle: {
    fontWeight: 'bold',
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',


  },
  textInputStyle: {
    fontSize: 24,

    height: 50,
    width: '90%',

    color: 'black',

  },
  button: {
    borderWidth: 2,
    borderRadius: 22,
    borderColor: '#3f46c8',
    height: 58,
    width: '90%',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 11,
    backgroundColor: '#3f46c8'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'lightgrey',
    fontWeight: '12',
  }
});