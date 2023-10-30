
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { REACT_APP_BASE_URL } from "@env";

const ChangePassword = ({ navigation }) => {
  const [data, setData] = useState('')
  const [pass, setPass] = useState('');
  const [conformPass, setConformPass] = useState('');

  const dataPost = () => {
    fetch(`${REACT_APP_BASE_URL}/passwordUpdate`, {
      method: 'POST',
      body: JSON.stringify({
        "password": data,
        "newpassword": conformPass
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == true) {
          navigation.navigate('WelcomeScreen')
        } else {
          console.log('error')
          alert(data.message)
        }
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      });
  } 

  //--------------HANDLE SUBMIT--------------------
 
  const handleSubmit = () => {
    if (pass !== conformPass) {
      alert('Passwords do not match');
      return;
    } else {
      dataPost()
      console.log('done')
    }
  };
 
  return (

    <View>
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginLeft: 0.5, marginRight: 0.5 }}>
                <View style={{ flexDirection: 'row', padding: 15, }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 25, height: 30, }}
                            source={require('../../assests/images/leftArrow.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '20%' }}>Change Password</ Text>
                </View>
            </View>

      <View style={{ marginTop: 70, borderWidth: 2, borderColor: 'black', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <TextInput placeholder='Old Password' onChangeText={(e) => { setData(e) }}  maxLength={16} style={{ fontSize: 20,   textAlign: 'center' }} />
      </View>

      <View style={{ marginTop: 10, borderWidth: 2, borderColor: 'black', borderRadius: 20, margin: 22, justifyContent: 'center' }}>

        <TextInput placeholder='New Password' onChangeText={(e) => { setPass(e) }}  maxLength={16} style={{ fontSize: 20,  textAlign: 'center' }} />
      </View>
      <View style={{ marginTop: 10, borderWidth: 2, borderColor: 'black', borderRadius: 20, margin: 22, justifyContent: 'center' }}>

        <TextInput placeholder='RE-Enter Password' onChangeText={(e) => { setConformPass(e) }}  maxLength={26} style={{ fontSize: 20, textAlign: 'center' }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: "center" }}>
        <TouchableOpacity onPress={handleSubmit}
          style={styles.button}>
          <Text style={styles.buttonText}>Add Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
    borderWidth: 2,
    borderRadius: 22,
    borderColor: '#3f46c8',
    height: 58,
    width: '60%',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 70,
    backgroundColor: '#3f46c8'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'lightgrey',
    fontWeight: '12',
  }
});
export default ChangePassword 