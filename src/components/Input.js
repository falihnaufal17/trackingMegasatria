import React from 'react';
import { TextInput, Text, View, StyleSheet, Image } from 'react-native';
import arrowDown from '../assets/icons/Iconionic-ios-arrow-down.png';

const Input = ({label = '', type = "text", placeholder = '', value = '', onChangeText}) => {
    let arrow = null;
    if(type == "text"){
        arrow = null
    }else if(type == "combobox"){
        arrow = (<Image source={arrowDown} />)
    }
    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.label}
            >{label}</Text>
            <View
                style={styles.formView}
            >
                <View style={{flex: 1}}>
                    <TextInput
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        value={value}
                        placeholderTextColor={"#5BC1DF"}
                        style={styles.formControl}
                        secureTextEntry={type == "password" ? true : false}
                    />
                </View>
                {arrow}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        width: '100%',
        marginBottom: 15
    },
    label: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: 14,
        marginBottom: 15,
        color: '#29415E'
    },
    formView:{
        borderWidth: 1,
        borderColor: '#5BC1DF',
        borderRadius: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    formControl: {
        fontSize: 14,
        fontFamily: 'NunitoSans-Bold',
        paddingVertical: 10
    }
})

export default Input;