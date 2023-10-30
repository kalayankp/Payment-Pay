import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CreditCardForm = ({ navigation }) => {
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
                    <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '30%' }}>Credit Card</Text>
                </View>
            </View>
            <View style={{ width: '100%', backgroundColor: '#E8E8E8', padding: 4 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: "black", marginTop: '4%', padding: 5 }}>CreditCard Bill </Text>
            </View>
            <View style={{ marginTop: '10%', borderWidth: 1, margin: '4%', borderRadius: 20, padding: 4 }}>
                <Text style={{ fontSize: 18, color: 'black', marginLeft: 18 }}>Mobile No</Text>
                <TextInput placeholder='Enter Mobile No' style={{}} /> 
            </View> 
            <View style={{ marginTop: '2%', borderWidth: 1, margin: '4%', borderRadius: 20, padding: 4 }}>
                <Text style={{ fontSize: 18, color: 'black', marginLeft: 18 }}>Last 4 Digit of CreditCard</Text>
                <TextInput placeholder='Last 4 Digit of CreditCard' style={{}} />
            </View>
            <TouchableOpacity style={{ marginTop: '20%', borderWidth: 1, backgroundColor: '#132fba', margin: '10%', padding: '4%', borderRadius: 20 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>PROCEED</Text>
            </TouchableOpacity>
        </View>
    )
} 

export default CreditCardForm


const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        color: 'black',
        marginLeft: 18
    }

})