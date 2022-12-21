import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
//justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        margin: 9,
        padding: 4,
        left: '8%',
        right: '17%',
        height: 46,
    // backgroundColor:'orange',
        backgroundColor:'#F6F6F6',
    },
    input: {
        position: 'relative',
        backgroundColor: '#F6F6F6',
        width: '84%',
        justifyContent: "center",
        paddingVertical: 7,
        marginLeft: 8
        // alignItems:"center"

    },
    textStyle: {
        // marginLeft: '42%',
        color: '#000000'
    }
});