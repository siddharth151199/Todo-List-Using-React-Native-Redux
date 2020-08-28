import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Modal, AsyncStorage } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const Input = (props) => {
    // console.log(props.data);
    
    return (
        <Modal
        animationType="slide"
        // transparent={true}
        visible={props.modal}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <View style={styles.screen}> 
        <TextInput autoFocus style={styles.input} value={props.value} placeholder="Enter Item" onChangeText={props.onChangeText} />
        <View style={styles.twoBtn}>
        <View style={styles.btn}>
            <Button  color="red" title="cancel"  onPress={props.handleModal} />
           {/* <MaterialIcons size={50} color="red" onPress={props.handleModal} name="add" />  */}
        </View>
        <View style={styles.btn}>
        <Button title="ADD"  onPress={props.onPress} />
        {/* <MaterialIcons size={50} color="red" onPress={props.onPress} name="cancel" />  */}
        
        </View>
    
        </View>
       </View>
        </Modal>  
      )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        // alignItems: ,
        padding: 80,
        justifyContent:'center',
        backgroundColor:'#1a1818'
    },
    twoBtn:{
        flexDirection: "row",
        justifyContent: 'space-around', 
        alignItems: 'center',
        padding: 30,
        borderRadius: 10,
        width: '100%'
    },
    btn:{
        width:'40%',
    },
    input:{
        borderBottomWidth: 1,
        borderColor: '#eee',
        fontSize: 20,
        color: '#eee'
    }
    
})
export default Input;
