import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import { REACT_APP_BASE_Bill_URL } from "@env";


const ElectricityForm = ({ navigation, route }) => {
    const [datas, setDatas] = useState([])
    const [title,setTitle]=useState()
    const [collecttitle,setCollectTittle]=useState([]) 
    const [value,setValue] =useState([])
    const { biilerId, billerName,ipId,macid } = route.params;
    console.log('-----', JSON.stringify(ipId));
    console.log('param is',title); 
    console.log('osdfdvf',collecttitle[0]);
    // const AddData = () => { 
    //     setCollectTittle([...title, collecttitle.push(title)]);
    //   };
    // Dynamic TextField Api Call
    const DynamicField = () => {
        fetch(`${REACT_APP_BASE_Bill_URL}/customerParamsbyBillerId`, {
            method: 'POST',
            body: JSON.stringify({
                billerId: biilerId
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then((data) => {
                setDatas(data.data)
                setTitle([data.data.result[0].param_name])
                setCollectTittle([...title, collecttitle.push(title)]);
             //   console.log('data is ', data.data.result[0].param_name);
            })
    }  

    let newDatais = datas
    console.log('=======', newDatais)
    useEffect(() => {
        DynamicField()
    
    }, [])
const dynamicData=()=>{
//    
//     let x =['a','d']
// let y = [1,2]
// let result = {};

// if (x.length === y.length) {
//     for (let i = 0; i < x.length; i++) {
//         result[title[i]] = value[i];
//     }
// } else {
//     console.error("Arrays x and y must have the same length for conversion to an object.");
// }
// var length = Object.keys(result).length;
// console.log('res is ----',length);
}
    const BillFetch=()=>{
        fetch(`${REACT_APP_BASE_Bill_URL}/electricityfetchBillRequest`,{
            method:'POST',
            body:JSON.stringify({
                'ip':"49.206.252.213",
                'mac':"F8-89-D2-15-D1-E7",
            })
        })
    }

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
                    <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '30%' }}>RingPe</Text>
                </View>
            </View>

            <View style={{ width: '100%', height: '10%', backgroundColor: '#E8E8E8' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: "black", marginTop: '4%', padding: 5 }}>Electricity Bill </Text>
            </View>
            <ScrollView>
            <View>
                <Text style={{ fontSize: 22, fontWeight: '500', padding: 21, color: 'black' }}>Enter details</Text>
            </View>

            <View style={{ borderWidth: 1, borderRadius: 20, margin: 15, }}>
                <Text style={{ padding: 6, color: 'grey', marginLeft: 11, fontSize: 16 }}>Selected Biller</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 2 }}>
                    <Text style={{ padding: 2, color: 'black', marginLeft: 11, fontSize: 18, width: '80%' }}> {billerName}</Text>
                    <TouchableOpacity style={{ padding: 10 }}>
                        <Text style={{ color: 'blue', fontSize: 18, fontWeight: '500', }}>EDIT  </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={datas.result}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    
                    <View style={{ borderWidth: 1, borderRadius: 20, margin: 15, padding: 10, borderColor: 'black' }}>
                        <Text>{item.param_name} {setTitle(item.param_name)}</Text>
                        <TextInput placeholder={item.param_name} onChangeText={(txt)=>setValue(txt)} style={{ color: 'black', fontSize: 20, padding: 8, }} />
                    </View>
                   
                )}
            />
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity onPress={dynamicData}
                    style={{ height: 62, margin: 20, marginTop: "12%", borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3f46c8' }}>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Fetch Bill</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

export default ElectricityForm
