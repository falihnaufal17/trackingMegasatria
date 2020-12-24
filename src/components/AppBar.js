import React from 'react';
import { View, StyleSheet } from 'react-native';

const AppBar = ({style, children}) => {
    return (
        <View
            style={style}
        >
            {children}
        </View>
    )
}

export default AppBar;