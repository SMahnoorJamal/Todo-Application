import React from 'react';

import { View, TouchableOpacity, StyleSheet, Text, ProgressViewIOSComponent } from 'react-native';

const Button = (props) => {

    return (

        <View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>{props.text ? props.text : 'Log In'}</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        // padding: 20,
        borderRadius: 100,
        height: 51,
        width: 374,
        justifyContent: 'center',
        left: 16,
        right: 16
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
})

export default Button;