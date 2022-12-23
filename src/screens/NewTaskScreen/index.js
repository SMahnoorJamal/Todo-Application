import React, { Component } from "react";

import { TouchableOpacity, View, ScrollView, SafeAreaView, Text, AsyncStorageStatic } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { CustomText } from "../../components/CustomText";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Line from '../../components/Line';
import { Remainder } from "../../popups/Reminder";

export class NewTaskScreen extends Component {

    constructor(props) {

        super(props);
        this.state = {
            NavProps: props,
            props: null,
        };
        // console.log("nyyyy", navigation)
        // const [isModalVisible, setIsModalVisible] = React.useState(true);
    }


    render(props) {

        return (
            <ScrollView style={styles.container}>

                <View style={{
                    flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                    , width: '60%', left: '4%'
                }}>
                    <TouchableOpacity style={{ top: '7%' }} onPress={() => this.state.props.navigate('Login')}>
                        <Text style={{ color: '#000000', fontSize: 15 }}>Back</Text>
                    </TouchableOpacity>
                    <Header
                        title='New Task'
                    />
                </View>

                {/* //Pop up */}
                <Remainder ModalVisible={true} />

                <View style={{ marginTop: 12 }}>

                    <View style={{
                        flexDirection: "row",
                        right: '100%',
                        left: '13%',
                        width: "88%"
                    }}>
                        <Ionicons style={{ top: '4%' }} size={25} name='chatbubble-ellipses-outline'></Ionicons>
                        <Input placeholder='Summary' style={styles.inputStyle}
                            inputContainer={{}} />
                    </View>
                    <Line />


                    <View style={{
                        flexDirection: "row",
                        right: '100%',
                        left: '13%',
                        //  height: '22%',  
                        top: 6,
                        width: "86%"
                    }}>
                        <Entypo style={{ top: '4%' }} size={25} name='text'></Entypo>
                        <Input placeholder='Description' style={styles.inputStyle1} multiline={true}
                            inputContainer={{ position: 'relative', }} />
                    </View>
                    <View style={{ marginTop: '10%' }}>
                        <Line />
                    </View>




                    <View style={{
                        flexDirection: "row",
                        right: '100%',
                        left: '13%',
                        marginTop: '3%',
                        width: "88%"
                    }}>
                        <AntDesign style={{ top: '4%' }} size={25} name='clockcircleo'></AntDesign>
                        <Input placeholder='Due date' style={styles.inputStyle}
                            inputContainer={{}} />

                    </View>
                    <Line />
                </View>

                <View style={styles.buttonContainer}>

                    <Button onPress={() => this.state.props.navigate('Login')}
                        //Nested Navigator
                        // onPress={() => this.state.props.navigate('Home', { screen: 'TaskScreen'})}
                        text='Save' />
                </View>


            </ScrollView>
        )
    }
}