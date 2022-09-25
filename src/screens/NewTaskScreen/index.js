import React from "react";

import { TouchableOpacity, View, ScrollView, SafeAreaView, Text } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { CustomText } from "../../components/CustomText";
import Input from "../../components/Input";
import Button from "../../components/Button";

export const NewTaskScreen = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>

                <Header backButton="true" title='New Task' onPress={() => navigation.navigate('TaskScreen')} />
            


  
            {/* 
        <View style={styles.inputContainer}>
            <Input placeholder='Summary' style={styles.inputStyle} />
             <Input placeholder='Description' style={styles.inputStyle1}/> 
        </View> */}

            {/* <View style={styles.buttonContainer}> 
            <Button onPress={() => navigation.navigate('TaskScreen')} text='Save' />
        </View> */}
            {/* 
        <View style={styles.textStyle}>
            <CustomText text="Forgot your password?" />
        </View> */}

        </ScrollView>
    )
}