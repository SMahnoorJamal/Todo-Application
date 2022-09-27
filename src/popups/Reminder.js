import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Button from "../components/Button";

export const Reminder =({navigation}) => {
    console.log("navifrr", {navigation})

    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
        //   transparent={true}
          backdropOpacity={0.3}
          visible={modalVisible ? modalVisible : modalVisible
        }
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
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
              onPress={() => {navigation.navigate('TaskScreen'),setModalVisible(!modalVisible)}}
               text="Remind me again"></Button>


               <Text>Skip</Text>
            </View> 
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </View>
    )

}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    //   backgroundColor: transparent
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  