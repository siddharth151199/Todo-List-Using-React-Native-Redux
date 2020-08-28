import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Modal, AsyncStorage } from 'react-native'
import Application from './Application';
import Trial from './components/trial';
import { Provider } from 'react-redux';
import store from './redux/store';
// import Sound from './screens/Sound';
import Sound1 from './screens/Sound1';
import DatePicker from './screens/DatePicker';

class App extends Component {
  constructor(){
    super();
    this.state = {
    flag : false,
    data: null
    }
  }
  
  componentDidMount(){
  this.getData()  
  }
  getData = async() =>{
  console.log('app.js');
  const array = await AsyncStorage.getItem('items'); 
  this.setState({
     data: array
   })
 }
  // show = async () =>{
  //   let user = await AsyncStorage.getItem('user');
  //   if(user){
  //     this.setState({
  //       flag: true
  //     })
  //   }
  // }

  render() {
    // var data;
      return (
        <Provider store={store}>
          
        <View style={styles.container}>
          <Application data={this.array} />
          {/* <DatePicker /> */}
        {/* <PushNotification /> */}
        {/* <Sound1 /> */}
        </View>
        </Provider>
        
      )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // alignItems: 'center',
    // justifyContent:'center',
  }
})

const mapStateToProps = state =>{
  return{
    items: state.items
  }
}
export default App