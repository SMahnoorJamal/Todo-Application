import React from 'react';
import { View, Text, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

const Header = (props) => {

    console.log('headerProps', props)

    return (
        <View>
            {props.backButton ?

                <View style={styles.header1}>

                    <TouchableOpacity onPress={props.onPress}>
                        <Text style={{color:'#000000', fontSize: 15}}>Back</Text>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>{props.title}</Text>
                </View>
                       
                :
                <View style={styles.header}>

                    <Text style={styles.headerText}>{props.title}</Text>
                </View>}
        </View>

    )
};


export default Header;