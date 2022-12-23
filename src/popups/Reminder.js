import React, { Component } from "react";
import { Alert, StyleSheet, Text, Pressable, View } from "react-native";
import Button from "../components/Button";
import Modal from "react-native-modal";

export class Remainder extends Component {

  // Navigation Props
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
      NavProps: props,
      props: null,
      isLoading: true,
      value: this.props.modalVisible
    };
  }
  componentDidMount = () => {
    console.log("componentdid", this.state.isModalVisible)
    this.setState({ props: this.state.NavProps.navigation })
  }

  handleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }
  handleModal2 = () => {
    this.setState({ isLoading: false })
  }
  render() {
    return (

      <Modal isVisible={this.state.value ? this.state.value : this.state.isModalVisible}>
        <View style={{ flex: 1 }}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ fontFamily: 'Inter', color: '#000000', fontSize: 30 }}>
                Reminder
              </Text>
              <Text style={styles.modalText}>
                Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation.
                Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse.
                Consequat velit qui adipisicing sunt.
              </Text>

              <Button
                style={styles.buttonStyle}
                text="Remind me again"
                onPress={this.handleModal}></Button>


              <Button
                style={styles.buttonStyle2}
                onPress={this.handleModal}
                textStyle={{ color: "black" }}
                text="Skip"
              ></Button>
            </View>
          </View>

        </View>
      </Modal>
    )
  }

}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
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

  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 100,
    height: 51,
    width: 300,
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
    borderColor: "black",
    height: 51,
    width: 300,
    justifyContent: 'center',
    left: 2,
    right: 16
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    width: 300,
    fontSize: 20,
    marginTop: 10
  }
});
