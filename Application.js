import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Alert, Button, FlatList, AsyncStorage } from 'react-native';
import Header from './components/Header';
import Input from './screens/Input'
import ListItems from './screens/ListItems';
import {MaterialIcons} from '@expo/vector-icons';
import { addTodo, removeTodo } from './redux';
import { connect } from 'react-redux';
import DatePicker from './screens/DatePicker';
import AlarmBuffer from './screens/AlarmBuffer';

function Application(props) {
  // const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
//   var sid = "siddharth.borge99@gmail.com";
//   // if (!AsyncStorage.getItem('user')) {
//   AsyncStorage.setItem('user', sid);
//   const user = await AsyncStorage.getItem('user');
//   console.log(user);
  // }
 useEffect(() => {
   console.log('Application.js');
   
 }, [])

  const addItems = async () =>{
    props.addTodo({id : Math.random().toString(), value: currentItem})

    // setItems(prevItems =>[...prevItems, {id : Math.random().toString(), value: currentItem}]);
    // await AsyncStorage.setItem('mylist', JSON.stringify(items))
    setModalVisible(false)
    setCurrentItem('');
    // const dataStorage  = await AsyncStorage.getItem('mylist')
    // console.log(dataStorage);
    // setItems(JSON.parse(dataStorage))
      // console.log(props.items);
      
    }

// const addInDataBase = () =>{
//   console.log(items);
  
// }

const handleChange = (item) =>{
  setCurrentItem(item);
  // setItems({})  
}
const onDelete = (goalId) =>{
    Alert.alert(
        'Delete',
        'Are You Sure?',
        [ {
          text: 'No',
          // onPress:() =>{},
          style:'cancel'
        },
          {
            text: 'Yes',
            onPress: async () => (
            props.removeTodo(goalId)     

            ),
            style:'default',
          },          
        ]
      )

 
}
const handleModal = () =>{
  setModalVisible( prev => !prev );  
}
  return (
    <>
    <Header />
    <View style={styles.screen}>
      {/* <TextInput value={currentItem} placeholder="Enter Item" onChangeText={handleChange} />
      <Button title="ADD" onPress={addItems}/> */}
      <Input handleModal={handleModal} modal={modalVisible} value={currentItem} onChangeText={handleChange} onPress={addItems}  />
      <View>
      <FlatList 
      keyExtractor={(item) => item.id}
      data={props.items}
      renderItem={itemdata =>(
        <ListItems modal={modalVisible} onDelete={onDelete} id={itemdata.item.id} data={itemdata.item.value} />
      )}
      />
    </View>
        <DatePicker visible={props.clock} />
        <AlarmBuffer />
    </View>
    <View style={styles.btn}>
    <View style={styles.addBtn}>
    <MaterialIcons onPress={handleModal} size={50} color="#eeea" name="add-circle" />
      {/* <Button title="Add" onPress={handleModal} /> */}
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    padding: 20,
    backgroundColor: '#1a1818'
  },
  btn:{
    backgroundColor: '#1a1818'

  },
  addBtn:{
    // flex: 3,
    // marginTop: 400,
    // // padding: 2,
    // alignItems: 'center',
    // justifyContent:'center',
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    // marginLeft: 70,
    // marginBottom: 20,
    backgroundColor: '#1a1818',
    // bottom: 10,
    // position: 'absolute'
    // right: 10
  },
  addsign:{
   
  }
});

const mapStateToProps = state =>{
  return{
    items: state.items,
    clock: state.clock
  }
}
const mapStateToDispatch = dispatchEvent =>{
  return{
    addTodo: (todo) => dispatchEvent(addTodo(todo)),
    removeTodo: (key) => dispatchEvent(removeTodo(key))
  }
}
export default connect(mapStateToProps,mapStateToDispatch)(Application)
// import React, { Component } from 'react'
// import { View } from 'react-native'
// import Trial from './components/trial'

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Trial />
//       </View>   )
//   }
// }
