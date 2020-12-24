import React from 'react';
import { StyleSheet, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import arrowDown from '../assets/icons/Iconionic-ios-arrow-down.png';

const Combobox = ({
    data = [],
    value = "",
    onChangeItem,
    placeholder = ""
}) => {
    const styles = StyleSheet.create({
        container: {
            height: 40,
            marginBottom: 15
        },
        comboboxStyle: {
            borderWidth: 1,
            borderColor: '#5BC1DF',
            borderRadius: 3
        },
        items:{
            justifyContent: 'flex-start',
            backgroundColor: '#FFFFFF'
        },
        dropdown:{
            backgroundColor: '#fafafa'
        },
        placeholder:{
            color: '#5BC1DF'
        },
        activeLabel:{
            color: '#5BC1DF'
        },
        rotateUp:{
            transform: [{rotate: '180deg'}]
        }
    })
    return (
        <DropDownPicker
            items={[
                {label: placeholder, value: ''},
                ...data
            ]}
            defaultValue={value}
            containerStyle={styles.container}
            placeholder={placeholder}
            placeholderStyle={styles.placeholder}
            style={styles.comboboxStyle}
            itemStyle={styles.items}
            dropDownStyle={styles.dropdown}
            onChangeItem={onChangeItem}
            customArrowDown={() => <Image source={arrowDown}/>}
            customArrowUp={() => <Image source={arrowDown} style={styles.rotateUp}/>}
            selectedLabelStyle={styles.activeLabel}
        />
    )
}

export default Combobox;