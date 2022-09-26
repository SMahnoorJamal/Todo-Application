import { useState } from "react";

import { TouchableOpacity, View, ScrollView, Text } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { CustomText } from "../../components/CustomText";
import { TaskList } from "../../components/TaskList";
import { CustomCheckBox } from "../../components/CustomCheckBox";
import { Reminder } from "../../popups/Reminder";

export const TaskScreen = ({ navigation }) => {

    const [time, timer] = useState(false)

    return (
        <       View>

            {time ?
                <View>
                    <Reminder time={time}/>
                </View> :
                <ScrollView style={{ backgroundColor: 'white' }}>

                    <Header title="Task" />

                    <View style={styles.container}>

                         <TouchableOpacity onPress={() => navigation.navigate('NewTaskScreen')}>
                               <CustomText text="+ Add new task" />
                        </TouchableOpacity>


                        <View style={styles.tasksConTainer}>
                            <CustomText text="Incomplete" />
                            <TaskList />
                        </View>

                        <View style={styles.CompletedText}>

                            <CustomText text="Completed" />

                        </View>
                        <View style={styles.tasksConTainer1}>

                            <CustomCheckBox defaultChecked={true} value={true} text="Respond to Jane email" />
                            <CustomCheckBox text="Rechedule weekly meeting" />
                            <CustomCheckBox text="Service my bike" />
                            <CustomCheckBox text="Recheck the agreement document" />
                        </View>
                    </View>

                </ScrollView>}
        </View>

    )
}