import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, BackHandler, Alert } from 'react-native';
import Logo from '../assets/images/cropped-MSH-1.png';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = (props) => {
    const [form, setForm] = useState({
        phone: '',
        password: ''
    })

    const submit = () => {
        props.navigation.navigate('Home')
    }
    
    return(
        <SafeAreaView
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollView}
            >
                <View>
                    <Text style={styles.title}>Tracking Megasatria</Text>
                    <Image source={Logo} style={styles.image}/>
                    <Input 
                        type="text"
                        placeholder="Masukan Email atau Nomor Hp"
                        label="Email atau Nomor Hp"
                        value={form.phone}
                        onChangeText={(val) => setForm({...form, phone: val})}
                    />
                    <Input 
                        type="password"
                        placeholder="Masukan Password"
                        label="Password"
                        value={form.password}
                        onChangeText={(val) => setForm({...form, password: val})}
                    />
                </View>
                <Button
                    title="Masuk"
                    onClick={() => submit()}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    scrollView:{
        flexGrow: 1,
        justifyContent: 'space-between',
        padding: 20
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#5BC1DF',
        fontFamily: "NunitoSans-Bold",
        marginBottom: 15
    },
    image:{
        marginBottom: 20,
        alignSelf: 'center'
    }
})

export default Login;