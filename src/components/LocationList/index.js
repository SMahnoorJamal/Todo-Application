import React from "react";

import { View, FlatList, Text, SafeAreaView, Image} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { styles } from "./styles";
import { Data } from "./Data";
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign'

export const LocationList = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={Data}
                style={{ marginTop: 3}}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
            />
        </SafeAreaView>

    )
}

const RenderItem = ({ item, index }) => {

    return (
    
            <View style={styles.item}>
                {/* <View>
                    <CheckBox style={{ borderColor: '#DADADA', borderRadius: "10%" }} />
                </View> */}
                <Text style={{color: 'red'}}>📍</Text>
                <View style={{ marginLeft: 7 }}>
                    <Text style={styles.task}>{item.task}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>

                {/* <View style={styles.main}>
            <Image style={styles.img} source={image} />
          </View> */}
            </View>
      
    )
}