import React from 'react';
import { View, Text, StyleSheet, ScrollView, UseState, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button';
import { CustomText } from '../../components/CustomText';
import Input from '../../components/Input';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles';

const Login = ({navigation}) => {

    console.log("navProps", navigation)
    return (

        // <KeyboardAvoidingView  style={styles.container} behavior='height'>
        <ScrollView style={styles.container}> 

            <Header title='Log In' />

            <View style={styles.inputContainer}>
                <Input placeholder='Email'  />
                <Input placeholder='Password' iconText='Show' />
            </View>

            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate('Home')} text='Log In' />
            </View >

            <View style={styles.textStyle}>
                <CustomText touchable="true" text="Forgot your password?" />

            </View>                   

        </ScrollView>
        // </KeyboardAvoidingView>
    )

}


export default Login;