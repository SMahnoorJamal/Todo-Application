import React from "react";
import { View, Text} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { styles } from "./styles";

export const CustomCheckBox =(props) => {

    return(
        <View style={styles.item}>
                <View>
                    <CheckBox
                    tintColors={{ true: '#DADADA', false: 'white' }}
                    value={true} style={{  borderColor: '#DADADA', borderRadius: "10%" }} />
                </View> 


                <View style={{ marginLeft: 7 }}>
                    {/* <Text style={styles.task}>{item.task}</Text> */}
                    <Text style={styles.date}>{props.text}</Text>
                    {/* <Text style={styles.date}>"Rechedule weekly meeting"</Text>
                    <Text style={styles.date}>"Service my bike"</Text>
                    <Text style={styles.date}>"Recheck the agreement document"</Text> */}
                </View>
            </View>
    )
}