import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { CustomText } from '../components/CustomText';

const Login = () => {

    return (

        <View style={styles.container}>

            <Header title='Log In' />

            <View style={styles.inputContainer}>
                <Input placeholder='Email' iconText='Show' />
                <Input placeholder='Password' />
            </View>

            <View style={styles.buttonContainer}>
                <Button text='Log In'  />
            </View>

            <View style={styles.textStyle}>
                <CustomText text="Forgot your password?" />
            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    container:
        { backgroundColor: 'white' },

    inputContainer: {
        marginTop: 10
    },
    buttonContainer: {
        marginTop: '40%'
    },
    textStyle: {
        alignItems: 'center', 
        marginTop: 9
    }
})

export default Login;