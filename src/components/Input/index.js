import React from "react";

import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

const Input = (props) => {

    return (

        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder={props.placeholder ? props.placeholder : "Email"} />

{props.iconText ? 
            <TouchableOpacity style={{ width: '15%'}}>
                <Text style={styles.textStyle}>{props.iconText}</Text>
            </TouchableOpacity>
            :
         <TouchableOpacity style={{ width: '15%'}}>
        </TouchableOpacity>
}

        </View>

    )
}


export default Input;