import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Header = (props) => {

    console.log('headerProps', props)

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
};


export default Header;