import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
const WelcomeScreen = ({ navigation }) => {

    const [active, setActive] = useState(false);
    const [activeSignup, setActiveSignUp] = useState(false);
    const [ch1,setCh1] = useState('#3746C8')
const [ch2,setCh2] = useState('#3746C8')
    // const handleClick = () => {
    //     setActive(!active);
    // };

    // const handleClickSignUp = () => {
    //     setActiveSignUp(!activeSignup)
    // }; #25dfeb
  
    return (
        <View style={{ height: '100%',backgroundColor:'white' }}>
            {/* <LinearGradient
                colors={['#3746cb', '#03f0ff',]}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                style={styles.linearGradient}> */}
                <View style={{alignItems:'center',}}>
                <Image
                    style={styles.logo}
                    source={require('../assests/icons/ringpeIcons.png')}
                />
                </View>
                <Text style={{ fontSize: 30, color: 'black', textAlign: 'center', marginTop: '9%',fontWeight:'bold' }}>Welcome To RingPe</Text>
                <View style={{borderWidth:1,width:"10%",marginLeft:'19%',height:'1%',borderRadius:120,backgroundColor:'grey',marginTop:'10%'}}></View>
                <View style={{ marginTop: '30%',margin:'6%' }}>
                    <TouchableOpacity onPress={() => {  
                        navigation.navigate('LoginScreens')
                      //  setCh1('#1201FE')
                    }}
                        style={[styles.button, { backgroundColor: ch1, }]}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                     </TouchableOpacity>
                        
                    {/* <TouchableOpacity onPress={() => {  
                        navigation.navigate('MobileNoScreen')
                        setCh1('#1201FE')
                    }}
                        style={[styles.button, { backgroundColor: ch2, }]}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('MobileNoScreen') 
                      //  setCh1('#1201FE') 

                    }} 
                        style={[styles.button, { backgroundColor: '#1286FF', }]}>
                        <Text style={[styles.buttonText, { color: 'white',fontWeight:'bold',fontSize:24 }]}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            {/* </LinearGradient> */}
        </View>
    )
}
export default WelcomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        marginTop: '10%',
        width: '70%',
        height: 150, 
    
      },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: '100%',
        height: '100%',
    },
    button: {
        borderWidth: 1,
        borderRadius: 14,
       // borderColor: '#2596be',
        height: '18%',
        fontFamily: 'Josefin Sans',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 15,

    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '900',
        color: 'white',
        fontWeight:'bold'


    }
});