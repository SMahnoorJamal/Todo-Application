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
  textInputContainer:
  {
    flexDirection: "row",
    right: '100%',
    left: '13%',
    width: "88%"
},
headerContainer:{
  flexDirection: "row", alignItems: "center", justifyContent: "space-between"
  , width: '60%', left: '4%'
},
textInputContainer2:
{
  flexDirection: "row",
  right: '100%',
  left: '13%',
  //  height: '22%',  
  top: 6,
  width: "86%"
},
textInputContainer3:
{
  flexDirection: "row",
  right: '100%',
  left: '13%',
  marginTop: '3%',
  width: "88%"
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