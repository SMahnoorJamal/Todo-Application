import React from "react";

import { View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { CustomText } from "../../components/CustomText";
import { TaskList } from "../../components/TaskList";

export const TaskScreen = () => {

    return (
        <View>
            <Header title="Task" />


            <View style={styles.container}>
                <CustomText text="+ Add new task" />


                <View style={styles.tasksConTainer}>
                    <CustomText text="Incomplete" />

                    <TaskList />
                </View>


                <View style={styles.tasksConTainer}>
                    <CustomText text="Completed" />
                </View>

            </View>



        </View>
    )
}