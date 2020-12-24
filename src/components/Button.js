import React from 'react';
import { TouchableOpacity, Text } from 'react-native'

const Button = ({title = '', backgroundColor = '#5BC1DF', textColor = '#FFFFFF', onClick}) => {
    return(
        <TouchableOpacity 
            style={{
                backgroundColor: backgroundColor,
                paddingVertical: 15,
                width: '100%',
                borderRadius: 3,
                paddingHorizontal: 20
            }}
            onPress={onClick}
            activeOpacity={0.8}
        >
            <Text
                style={{
                    color: textColor,
                    fontSize: 16,
                    textAlign: 'center',
                    fontFamily: "NunitoSans-Regular"
                }}>
                    {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;