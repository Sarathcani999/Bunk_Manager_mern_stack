import React , { useState } from 'react';
import Subject from './Components/Subject'
import {TextInput , StyleSheet, Text, View , Button } from 'react-native';
import subject from './Components/Subject';


export default function App() {
  const [enteredSubject , setEnteredSubject] = useState('')
  const [subjects , setSubjects] = useState(["Maths" , "Physics"])
  
  const addSubjectHandler = (newSubject) => {
    if( enteredSubject == '' ) {
      console.log("Can't enter subject")
    } else {
      setSubjects([...subjects , enteredSubject])
    }
   
  }

  const changeSubjectTextInputHandler = (enteredSubject) => {
    // console.log(enteredSubject)
    enteredSubject = setEnteredSubject(enteredSubject)
    // setEnteredSubject(e.value)
  }

  const removeSubject = (subjectToBeRemoved) => {
    let i = 0
    setSubjects(subjects.filter(item => item != subjectToBeRemoved))
  }

  return (
    <View style={styles.container}>
      <h2>Bunk Manager</h2>
      <View style={styles.createSubject}>
        <TextInput placeholder="Subject Name" onChangeText={changeSubjectTextInputHandler} value={enteredSubject}></TextInput>
        <Button title="Add" onPress={addSubjectHandler}></Button>
      </View>
      <View style={styles.createdSubject}> 

        {subjects.map(subject => <Subject name = {subject} removeSubjectHandler = {removeSubject}/>)}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : 25 ,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth : 1 ,
    // borderColor : 'grey',
    // margin : 2
    
  },
  createSubject : {
    borderWidth : 1 ,
    borderColor : 'black' ,
    width : 250 ,
    margin : 4 , 
    padding : 10
  } ,

  createdSubject : {
    width : 250 ,
    textAlign : 'center' ,
    borderColor : 'black' ,
    borderWidth : 1 ,
    padding : 10 ,
    justifyContent : "center"
  }
});
