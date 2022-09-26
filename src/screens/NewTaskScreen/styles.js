import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        // left: '5%',
        backgroundColor: 'white',
        flex: 1
    },
    BackBtnStyle: {

    },

    tasksConTainer: {
        marginTop: '5%'
    },

    inputContainer: {

    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: 'red',
        height: '80%',
        width: '90%'
    },
    inputStyle: {
        marginTop: 2,
        width: '100%',
        backgroundColor: 'lightGreen',
        color: 'green',
        height: '40%'
    },
    inputStyle1: {
        height: '10%'
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
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      //   backgroundColor: transparent
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})