import React from "react";

import { TouchableOpacity, View, ScrollView, SafeAreaView } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { CustomText } from "../../components/CustomText";
import { TaskList } from "../../components/TaskList";
import { CustomCheckBox } from "../../components/CustomCheckBox";

export const TaskScreen = ({ navigation }) => {

    return (
        <ScrollView>

            <Header title="Task" />

            <View style={styles.container}>

                <TouchableOpacity onPress={() => navigation.navigate('NewTaskScreen')}>
                    <CustomText text="+ Add new task" />
                </TouchableOpacity>

                
                    <View style={styles.tasksConTainer}>
                        <CustomText text="Incomplete" />
                        <TaskList />
                    </View>
            
                <View style={styles.tasksConTainer1}>
              
                    <CustomText text="Completed" />

                    <CustomCheckBox text="Respond to Jane email"/>
                    <CustomCheckBox text ="Rechedule weekly meeting"/>
                    <CustomCheckBox/>
                </View>

            </View>

        </ScrollView>
    )
}