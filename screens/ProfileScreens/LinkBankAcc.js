import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React, { useState } from 'react'
import {REACT_APP_BASE_URL} from "@env";
const LinkBankAcc = ({navigation}) => { 
   
  const [accountNo, setAccountNo] = useState('');
  const [accountName, setAccountName] = useState('')
  const [bankName, setBankName] = useState('')
  const [ifscCode, setIfscCode] = useState('') 
   
  //  ----------- POST API CALL -------------------  
  const dataPost = ({ navigation }) => { 
    fetch(`${ REACT_APP_BASE_URL}/addBankAccount`, {
      method: 'POST',
      body: JSON.stringify({  
        account_name: accountName,
        bank_name: bankName,
        ifsc_code: ifscCode,
        account_number: accountNo,
        accountupdate_reason: ''
      }),  
      headers: {
        'Content-Type': 'application/json',
      },
    }) 
      .then((response) => response.json()) 
      .then((data) => {
        if (data.status === true) {
          console.log('-------', data)
          navigation.goBack()  
        }else{
          alert(data.message)
        } 
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      });
  }
  return (
    <View>
      <View style={{ backgroundColor:'#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection:'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight:'400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '20%' }}>Link Bank Account</Text>
        </View>
      </View><View style={{ marginTop: 70, borderWidth: 1, borderColor: 'black', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <TextInput placeholder='Account Name' onChangeText={(e) => { setAccountName(e) }} maxLength={16} style={{ fontSize: 20, borderWidth: 0, width: 310, paddingLeft: 40 }} />
      </View> 
      <View style={{ marginTop: 10, borderWidth: 1, borderColor: 'black', borderRadius: 20, margin: 22, }}>
        <TextInput placeholder='Bank Name' onChangeText={(e) => { setBankName(e) }} maxLength={16} style={{ fontSize: 20, borderWidth: 0, width: 310, paddingLeft: 40 }} />
      </View>


      <View style={{ marginTop: 10, borderWidth: 1, borderColor: 'black', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <TextInput placeholder='Account Number' onChangeText={(e) => { setAccountNo(e) }}  keyboardType="numeric" maxLength={16} style={{ fontSize: 20, borderWidth: 0, width: 310, paddingLeft: 40 }} />
      </View>
      {/* <View style={{marginTop:10,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
 
         <TextInput placeholder='RE-Enter Account Number' onChangeText={(e)=>{setData(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:26,borderWidth: 0,width:360,paddingLeft:40}}/>
        </View> */}
      <View style={{ marginTop: 10, borderWidth: 1, borderColor: 'black', borderRadius: 20, margin: 22, justifyContent: 'center' }}>

        <TextInput placeholder='IFSC Code' onChangeText={(e) => { setIfscCode(e) }} maxLength={16} style={{ fontSize: 20, borderWidth: 0, width: 310, paddingLeft: 40 }} />
      </View>

      <View style={{ justifyContent: 'center', alignItems: "center" }}>
        <TouchableOpacity onPress={dataPost}
          style={styles.button}>
          <Text style={styles.buttonText}>Add Bank Account</Text>
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
    backgroundColor: '#132fba'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    fontWeight: '12',
  }
});

export default LinkBankAcc