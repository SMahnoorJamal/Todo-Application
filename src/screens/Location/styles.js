import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        width: '100%',
        // left: '8%',
        height: '100%',
        // marginTop: '5%',
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        padding: 10,
        flexDirection: 'row',
        // borderRadius: 15,
        // backgroundColor: 'orange',
        marginLeft: '-2%' ,
        borderRadius: 7
    },

    tasksConTainer: {
        marginTop: '5%',
        left: '2%',
        //  width: '85%'
    },
    tasksConTainer1: {
        marginTop: '2%',
        left: '6.5%',
         width: '85%',
         marginBottom: '15%'
    },
    CompletedText: {
        marginTop: '5%',
        left: '4%',
         width: '85%'
    }
})