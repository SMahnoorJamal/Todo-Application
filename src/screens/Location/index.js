import { useState } from "react";

import { TouchableOpacity, View, ScrollView, Text } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { CustomText } from "../../components/CustomText";
import { TaskList } from "../../components/TaskList";
import { CustomCheckBox } from "../../components/CustomCheckBox";
import { Reminder } from "../../popups/Reminder";
import { LocationList } from "../../components/LocationList";

export const Location = ({ navigation }) => {


    return (
            <ScrollView style={styles.container}>

                <Header title="Location" />

                <View style={{marginLeft: 8}}>

                    <TouchableOpacity style={{marginLeft: 9}} onPress={() => navigation.navigate('NewTaskScreen')}>
                        <CustomText text="+ Check In" />
                    </TouchableOpacity>


                    <View style={styles.tasksConTainer}>
                        <CustomText text="Current location" />

                        <View style={styles.item}>

                            <Text style={{ color: 'red' }}>📍</Text>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.task}>Pustegränd, Stockholm, SE</Text>
                                <Text style={styles.date}>59.3293° N, 18.0686° E</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.CompletedText}>

                        <CustomText text="Previous location" />
                        <LocationList />

                    </View>

                </View>

            </ScrollView>
    
    )
}