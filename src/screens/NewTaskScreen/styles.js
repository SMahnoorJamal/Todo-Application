import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  tasksConTainer: {
    marginTop: '5%'
  },
  inputContainer: {
    width: '95%',
    height: '30%',
    marginLeft: 5,
    marginTop: "8%",
  },
  buttonContainer: {
    marginTop: "10%",
    height: '80%',
    width: '100%',
  },

  inputStyle: {
    // color: 'red',
    right: '30%',
    marginTop: '3%',
    left:10,
    bottom:'2%',
    width: '86%'
    
    // borderBottomColor: 'lightGray',
    // borderBottomWidth: 1,

  },
 
  inputStyle1: {
    right: '30%',
    marginTop: '3%',
    left:10,
    height: '100%',
    bottom:'2%',
    width: '86%'
  },
  inputStyle2: {

    borderBottomColor: 'lightGray',
    borderBottomWidth: 1,
    width: "95%",
    marginLeft: 5
  },
 
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

})