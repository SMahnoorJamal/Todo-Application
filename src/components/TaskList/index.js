import React from "react";

import { View, FlatList, Text, SafeAreaView } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { styles } from "./styles";
import { Data } from "./Data";
import Swipeable from 'react-native-gesture-handler/Swipeable';

const RenderRight = () => {

    return (
        <View style={{ backgroundColor: "red" }}>
            <Text>Delete</Text>
        </View>
    )
}

export const TaskList = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={Data}
                style={{ marginTop: 8 }}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
            />
        </SafeAreaView>

    )
}

const RenderItem = ({ item, index }) => {

    return (
        <Swipeable renderRightActions={RenderRight}>
            <View style={styles.item}>
                <View>
                    <CheckBox style={{ borderColor: '#DADADA', borderRadius: "10%" }} />
                </View>


                <View style={{ marginLeft: 7, marginTop: 4 }}>
                    <Text style={styles.task}>{item.task}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
        </Swipeable>

    )
}