import React from "react";

import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

const Input = (props) => {

 console.log("propsInput", props)
    return (

        <View style={props.style ? props.style : styles.container}>

            <TextInput
            {...props}
            multiline={props.multiline ? props.multiline : false}
                style={props.inputContainer ? props.inputContainer : styles.input}
                placeholder={props.placeholder ? props.placeholder : "Email"} >
                </TextInput>

            {props.iconText ?
                <TouchableOpacity style={{ width: '15%' }}>
                    <Text style={styles.textStyle}>{props.iconText}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={{ width: '15%' }}>
                </TouchableOpacity>
            }

        </View>

    )
}


export default Input;