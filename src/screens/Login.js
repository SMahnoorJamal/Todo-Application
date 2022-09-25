import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header/Header';
import Input from '../components/Input/index';
 import Button from '../components/Button';
import { CustomText } from '../components/CustomText';

const Login = ({navigation}) => {

    return (

        <ScrollView style={styles.container}> 

            <Header title='Log In' />

            <View style={styles.inputContainer}>
                <Input placeholder='Email'  />
                <Input placeholder='Password' iconText='Show' />
            </View>

            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate('TaskScreen')} text='Log In' />
            </View>

            <View style={styles.textStyle}>
                <CustomText text="Forgot your password?" />
            </View>

        </ScrollView>
    )

}

const styles = StyleSheet.create({

    container:
    {
        // width:'90%',
        backgroundColor: 'white',
        flex: 1
    },

    inputContainer: {
        marginTop: 10,
        width:'90%',
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