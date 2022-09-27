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
      // backgroundColor:'red',
      width: '95%',
      marginLeft: 5,
      marginTop: "8%",
    },
    buttonContainer: {
        marginTop: "20%",
        height: '80%',
        width: '90%'
    },
    inputStyle: {
        // marginTop: 2,
        // width: '170%',
        backgroundColor: 'lightGreen',
        color: 'green',
        // height: '40%',
          // width:200,
          borderBottomColor:'lightGray',
          borderBottomWidth:1,
      
    },
    inputStyle1: {

        borderBottomColor:'lightGray',
        borderBottomWidth:1,
        // height: "60%"
    },
    inputStyle2: {

      borderBottomColor:'lightGray',
      borderBottomWidth:1,
      width: "95%",
      marginLeft: 5
      // height: "60%"
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