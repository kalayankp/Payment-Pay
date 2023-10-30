import { View, Text, TouchableOpacity, Image, TextInput, LogBox } from 'react-native'
import React,{useState} from 'react'
import { REACT_APP_BASE_Bill_URL } from "@env";

const FastTagForm = ({ navigation, route }) => {
  const { biilerId, ipId, macId } = route.params
  const [vachileNo, setVachileNo] = useState('');
  const fetchBill = () => {
    fetch(`${REACT_APP_BASE_Bill_URL}/fastagBillFetch`, {
      method: 'POST', 
      body: JSON.stringify({
        Vehicle_Registration_Number:vachileNo,
        ip: ipId,
        mac: 'B8-8A-60-9E-F2-B',
        billerId: biilerId,
      }), 
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((data) => {
        //setLoading(false)
        console.log('status is ----', data);
       // setStatuss(data.status)
        //setErrors(data.message) 
        if (data.status === true) {
          const incomingData = data.data.result.payload
          console.log('bill data is--', data.data.result.payload.amount);
         // setLoading(false)
       
             console.log("const incomingData = data.data.result.payload",incomingData);
             console.log('bill data is--', incomingData.refId);
           navigation.navigate("FastTagBillFetch",
             {
              'ipID': ipId,
              'macid': macId,
              'billerId':biilerId,
               'biller_name': incomingData.accountHolderName,
               'billDate':incomingData.billDate,
               'dueDate':incomingData.dueDate,
               'billerTotalAmount':incomingData.amount,
               'billerAccountNo':incomingData.billNumber,
               'refId':incomingData.refId,
               'vachileNo':vachileNo,
               'name':'FastTag'  
                  
            })}
             else {
          console.log('bill data is--', data);
           alert(data.data.message)
        }
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      })
  };

  return (
    <View>
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../../assests/images/leftArrow.png')}
            />  
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '30%' }}>FastTag</Text>
        </View>
      </View>
      <View style={{ width: '100%', height: '10%', backgroundColor: '#E8E8E8', marginTop: '1%', }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: "black", padding: 5, marginLeft: 12 }}>FastTag </Text>
      </View>
      <View style={{ borderWidth: 1, borderRadius: 20, width: '90%', margin: "5%", padding: 8, borderColor: 'black', marginTop: '5%', height: '22%' }}>
        <Text style={{ marginLeft: 12,color:'black',fontSize:16, }}>vachile No</Text>
        <TextInput placeholder='XXX XXX XX' onChangeText={(txt)=>{setVachileNo(txt)}} style={{ color: 'black', fontSize: 20, padding: 6, marginLeft: 12,marginBottom:7   }} />
      </View>

      <View style={{ justifyContent: 'center', alignContent: 'center' }}>
        <TouchableOpacity onPress={fetchBill} 
          style={{ height: 62, margin: 20, marginTop: "12%", borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3f46c8' }}>
          <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Pay Bill</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FastTagForm