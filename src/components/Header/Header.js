import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Header = (props) => {

    console.log('headerProps', props)

    return (
        <View style={styles.header}>
            <Text style={{fontSize: 30, color: '#000000'}}>{props.title}</Text>
        </View>
    )
};


export default Header;