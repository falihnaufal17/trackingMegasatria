import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../assets/images/cropped-MSH-1.png';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = (props) => {

    const setSession = async () => {
        try {
            await AsyncStorage.setItem('sessionApp', 'appRunning')
            props.navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Megasatria Absen</Text>
            </View>
            <View>
                <Image source={Logo} />
            </View>
            <Button
                title="Selanjutnya"
                onClick={() => setSession()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#5BC1DF',
        fontFamily: "NunitoSans-Bold"
    }
})

export default Welcome;