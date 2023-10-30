import { View, Text, TouchableOpacity, Image, TextInput, LogBox } from 'react-native'
import React, { useState } from 'react'
import { REACT_APP_BASE_Bill_URL } from "@env";

const WaterBillForm = ({ navigation, route }) => {
  const { biilerId, ipId, macId,billerName } = route.params
  const [customer_ID, setCustomer_ID] = useState('')
  //console.log('id is ---',customer_ID, JSON.stringify(biilerId), JSON.stringify(macId), JSON.stringify(ipId));

  const WaterBill = () => {
    fetch(`${REACT_APP_BASE_Bill_URL}/WaterBillFetch`, {
      method: 'POST',
      body: JSON.stringify({
        customer_ID: customer_ID,
        ip: ipId,
        mac: '0.0.0.0',
        billerId: biilerId,
      }),
      headers: {
        'Content-Type': 'application/json',
      }, 
    }).then((response) => response.json())
      .then((data) => {
        //setLoading(false)
        console.log('status is ----', data.status);
        // setStatuss(data.status)
        //setErrors(data.message)
        if (data.status === true) {
          const newData = data.data.result.payload
          console.log('bill data is====--', newData);
          // setLoading(false)
          navigation.navigate("WaterBillFetch", {
            'ipID': ipId,
            'macid': macId,
            'biller_name': newData.accountHolderName,
            'billerTotalAmount': newData.amount,
            'dueDate': newData.dueDate,
            'customer_ID':customer_ID,
            'billerId':newData.billerId,
            'refId':newData.refId
          })
        } else {
          console.log('bill data is--', data);
          alert(data.message)
        }
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      })
  };

  return ( 
    <View style={{}}>
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '30%' }}>Water Bill</Text>
        </View>  
      </View>
      <View style={{ width: '100%', height: '10%', backgroundColor: '#E8E8E8', marginTop: '1%', }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: "black", padding: 5, marginLeft: 12 }}>Water Bill </Text> 
      </View>
      <View style={{ borderWidth: 1, borderRadius: 20, width: '90%', margin: "5%", padding: 10, borderColor: 'black', marginTop: '10%',borderBottomWidth:1  }}>
        <Text style={{ marginLeft: 12,flexDirection:"row" ,fontSize:17}}>Biller Name:<Text style={{color:'black',margin:10,fontSize:18}}>  {billerName}</Text> </Text>
        <TextInput placeholder='Please Enter Biller Number' onChangeText={(e) => { setCustomer_ID(e) }} style={{ color: 'black', fontSize: 18,marginBottom:-10,  marginLeft: 12,marginTop:-1,}} />
      </View>
 
      <View style={{ justifyContent: 'center', alignContent: 'center' }}>
        <TouchableOpacity onPress={WaterBill}
          style={{ height: 62, margin: 20, marginTop: "12%", borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3f46c8' }}>
          <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Pay Bill</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WaterBillForm