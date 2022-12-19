import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    flex: 1
  },
  tasksConTainer: {
    marginTop: '5%'
  },
  inputContainer: {
    width: '95%',
    marginLeft: 5,
    marginTop: "8%",
  },
  buttonContainer: {
    marginTop: "20%",
    height: '80%',
    width: '100%'
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 100,
    height: 51,
    width: 200,
    justifyContent: 'center',
    left: 2,
    right: 16
},
buttonStyle2: {
  alignItems: "center",
  marginTop: 4,
  backgroundColor: "white",
  borderRadius: 100,
  borderWidth: 2,
  borderColor:"black",
  height: 51,
  width: 200,
  justifyContent: 'center',
  left: 2,
  right: 16
},

  inputStyle: {
    // backgroundColor: 'red',
    // color: 'red',
    borderBottomColor: 'lightGray',
    borderBottomWidth: 1,

  },
  inputStyle1: {
    borderBottomColor: 'lightGray',
    borderBottomWidth: 1,
  },
  inputStyle2: {

    borderBottomColor: 'lightGray',
    borderBottomWidth: 1,
    width: "95%",
    marginLeft: 5
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})