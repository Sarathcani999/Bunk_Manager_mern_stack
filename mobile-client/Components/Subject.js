import React from 'react'
import { View , Text , StyleSheet, Button } from 'react-native'


const subject = (props) => {
    return (
        <View style={styles.subject}>
            <Text>
                {props.name} - 100 %
            </Text>
            <Button title='Mark Present' style = {styles.buttonMark}></Button>
            <Button title='Mark Absent' style = {styles.buttonMark}></Button>
            <Button title='X' onPress={() => props.removeSubjectHandler(props.name)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    subject : {
        textAlign : "center" , 
        borderWidth : 0.5 ,
        borderColor : 'black' ,
        margin : 4 ,
        padding : 10
    } ,
    buttonMark : {
        margin : 3 , 
        padding : 3
    }
})

export default subject