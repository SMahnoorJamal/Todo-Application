import React from "react";

import { View, Text } from "react-native";
import { styles } from "./styles";

export const CustomText = (props) => {

    return (
        <Text style={styles.textColor}>{props.text ?
            props.text : "Forgot your password?"}</Text>
    )
}

