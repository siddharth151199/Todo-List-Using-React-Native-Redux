import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image, DatePickerAndroid} from 'react-native';
import {MaterialIcons, Ionicons} from '@expo/vector-icons';
import { connect } from 'react-redux';
import { getAppLoadingLifecycleEmitter } from 'expo/build/launch/AppLoading';
import { visibility, showClock, toggleAlarm } from '../redux';
import DatePicker from './DatePicker';
const ListItems = (props) => {
const [modal, setModal] = useState(false)

   useEffect(() => {
    storeData()
    
   }, [props])
    const storeData = async() =>{      
    console.log("store new10");
   } 
   const showClock = () =>{
    //  console.log(props.clock);
     props.toggleAlarm()
    //  console.log('show clock');
     
   }
   return (
        <View style={styles.listItem} key={props.id}>
            <Text style={styles.text} >{props.data}</Text>
            <View style={styles.symbol}>
            <TouchableOpacity  onPress ={props.onDelete.bind(this, props.id)}>
        <MaterialIcons size={24} color="#1a1818" name="delete" />
        {/* <Ionicons name="arrow-down" size={32} color="green" />;     */}
        </TouchableOpacity>
        <TouchableOpacity onPress={showClock} >
        {/* <MaterialIcons size={24} color="#1a1818" name="alarm-add" /> */}
        </TouchableOpacity>
            </View>
          
        </View>
        // <DatePickerAndroid
    )
}
const styles = StyleSheet.create({
    listItem:{
        width: '100%',
        padding: 10,
        backgroundColor: '#6a6a6b',
        borderColor: '#eee',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent:'space-between'
        // borderStyle: 'dashed'
      },
      text:{
          color: '#eee',
          fontSize: 18,
          fontWeight: '900',
          fontStyle:'italic'
      },
      symbol:{
        flex:1,
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent:'flex-end'
      }
})
const mapStateToProps = state =>{
    return{
      clock: state.clock
    }
  }
  const mapStateToDispatch = dispatchEvent =>{
    return{
      toggleAlarm : () => dispatchEvent(toggleAlarm())
    }
  }
export default connect(mapStateToProps,mapStateToDispatch)(ListItems);
