import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const HeaderNav = () => {
  return (
    <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
    <View style={{ flexDirection: 'row', padding: 15, }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{ width: 25, height: 30, }}
          source={require('../assests/images/leftArrow.png')}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '28%' }}>Prepaid  Bills</ Text>
    </View>
  </View>
  )
}

export default HeaderNav