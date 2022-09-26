import React from "react";

import { TouchableOpacity, View, ScrollView, SafeAreaView, Text } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { CustomText } from "../../components/CustomText";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "react-native-modal";

export const NewTaskScreen = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = React.useState(true);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    return (
        <ScrollView style={styles.container}>

            <Header backButton="true" title='New Task' onPress={() => navigation.navigate('TaskScreen')} />

            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    {/* <Text>Hello!</Text> */}

                    <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>
                Reminder
                </Text>
              <Text style={styles.modalText}>
             
Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation.
 Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse.
 Consequat velit qui adipisicing sunt.
              </Text>

              <Button 
              style={{
              alignItems: "center",
              backgroundColor: "#000000",
              borderRadius: 100,
              height: 51,
              width: 200,
              justifyContent: 'center',
              left: 2,
              right: 16}}
              onPress={handleModal}
               text="Remind me again"></Button>
            </View> 
          </View>

                    {/* <Button title="Hide modal" onPress={handleModal} /> */}
                </View>
            </Modal>


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