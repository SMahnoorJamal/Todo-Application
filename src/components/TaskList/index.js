import React, {useState} from "react";

import { View, FlatList, Text, SafeAreaView, Image} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { styles } from "./styles";
import { Data } from "./Data";
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign'

const RenderRight = () => {

    return (
        <View style={{ backgroundColor: "red",width:'20%', 
        alignItems: "center", justifyContent:'center',        
        // ,borderBottomLeftRadius: 8, borderTopLeftRadius: 2, borderRadius: 14 
        }}>
           <AntDesign style={{right: 7}} name="delete" size={25} color="white"/> 
        
        </View>
    )
}

export const TaskList = () => {
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

    const [isSelected, setSelection] = useState(false);
    return (
        <GestureHandlerRootView>
        <Swipeable renderRightActions={RenderRight} >
            <View style={styles.item}>
                <View>
                    <CheckBox 
                     value={isSelected}
                     onValueChange={setSelection}
                     style={{ borderColor: '#DADADA', borderRadius: "10%" }} />
                </View>


                <View style={{ marginLeft: 7, marginTop: 4 }}>
                    <Text style={styles.task}>{item.task}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>

                {/* <View style={styles.main}>
            <Image style={styles.img} source={image} />
          </View> */}
            </View>
        </Swipeable>
        </GestureHandlerRootView>
    )
}