import React, { Component } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { Button, View, TouchableOpacity } from 'react-native';
import moment from 'moment';
import connect from 'react-redux/lib/connect/connect';
import { setAlarm, toggleAlarm } from '../redux';
import {MaterialIcons} from '@expo/vector-icons';

class DatePicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible : false
    }
  }

  handlePicker = (date) =>{
  const val = moment(date).format('DD-MM-YYYY, HH:mm')
    console.log(val);
    const time = {time : val};
    // var time = moment().format('DD-MM-YYYY, HH:mm') //returns Wed 04/10/2017
    // console.log(time, this.props.id);
    this.props.setAlarm(time)
    this.props.toggleAlarm()
}
  hidePicker = () =>{
    this.setState({
      visible: false
    })
    console.log('hide picker');
  }

  showPicker = () =>{
    this.setState({
      visible: true
    })
  }
  render() {
    console.log('<DatePicker/>',this.props.visible);
    
    return (
      <View> 
      <DateTimePicker
        isVisible={this.props.visible}
        onConfirm={(this.handlePicker)}
        onCancel={this.hidePicker}
        mode={'datetime'}
        is24Hour={false}
        isDarkModeEnabled={true}
        />
      {/* <TouchableOpacity onPress={this.showPicker} >
        <MaterialIcons size={24} color="#1a1818" name="alarm-add" />
        </TouchableOpacity> */}
        </View>
    )
  }
}

const mapStateToProps = state =>{
  return{
    clock: state.clock
  }
}
const mapStateToDispatch = dispatchEvent =>{
  return{
    toggleAlarm : () => dispatchEvent(toggleAlarm()),
    setAlarm: (alarm) => dispatchEvent(setAlarm(alarm))
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(DatePicker)


// //This is an example code to get TimePicker// 
// import React, { Component } from 'react';
// //import react in our code. 
// import { StyleSheet, View, Text, Modal, Button } from 'react-native';
// //import all the components we are going to use.
// import TimePicker from 'react-native-simple-time-picker';
// import { connect } from 'react-redux';
// import { visibility } from '../redux';
// import DateTimePicker from 'react-native-modal-datetime-picker'
// //import TimePicker from the package we installed

// class DatePicker extends Component {
//   state = {
//     selectedHours: 0,
//     //initial Hours
//     selectedMinutes: 0,
//     //initial Minutes
//     currentDate: new Date().toLocaleTimeString('en-US',{hour12: true})
//   }
//   render() {
//     console.log(this.state.currentDate);
//     console.log(this.state.selectedHours+':'+this.state.selectedMinutes+':00');
    
//     const { selectedHours, selectedMinutes } = this.state;
//     return (
//     <Modal
//     visible={this.props.modal}
//     >
//         <View style={styles.container}>
//         <Text>{selectedHours}hr:{selectedMinutes}min</Text>
//         <TimePicker
//           selectedHours={selectedHours}
//           //initial Hourse value
//           selectedMinutes={selectedMinutes}
//           //initial Minutes value
//           onChange={(hours, minutes) =>{ this.setState({ 
//                selectedHours: hours, selectedMinutes: minutes 
//          })
         
//         }
//          }
//         />
//       </View>
//       <Button title="Set" onPress={() => this.props.visibility()} />
//     </Modal>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginLeft:50,
//     marginRight:50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default connect(mapStateToProps,mapStateToDispatch)(DatePicker);


// // import React, {useState, useEffect} from 'react';
// // import {View, Button, Platform} from 'react-native';
// // import DateTimePicker from '@react-native-community/datetimepicker';

// // const DatePicker = () => {
// //   const [date, setDate] = useState(new Date().toTimeString());
// //   const [mode, setMode] = useState('date');
// //   const [show, setShow] = useState(false);
// //   const [selectedDate, setSelectedDate] = useState('')

// //   const onChange = (event, selectedDate) => {
// //     const currentDate = selectedDate || date;
// //     // setShow(Platform.OS === 'ios');
// //     // losetDate(currentDate);
// //     setSelectedDate(selectedDate)
// //     console.log('current date',date);
// //     console.log('selected date',selectedDate);
// //   };

// //   useEffect(() => {
// //     setInterval(() => {
// //       checkAlarm()
// //     }, 1000);

// //   }, [])

// //   const checkAlarm = ()=>{
// //     setDate(new Date())
// //     console.log('current date',date);    
// //     console.log('selected date',selectedDate);

// //     if (date === selectedDate) {
// //       console.log("time has been matched");
// //     }    
// //   }
// //   const showMode = currentMode => {
// //     setShow(true);
// //     setMode(currentMode);       
// //   };

// //   const showDatepicker = () => {
// //     showMode('date');
// //   };

// //   const showTimepicker = () => {
// //     showMode('time');
// //   };

// //   return (
// //     <View>
// //       <View>
// //         <Button onPress={showDatepicker} title="Show date picker!" />
// //       </View>
// //       <View>
// //         <Button onPress={showTimepicker} title="Show time picker!" />
// //       </View>
// //       {show && (
// //         <DateTimePicker
// //           testID="dateTimePicker"
// //           value={date}
// //           mode={mode}
// //           dateFoe
// //         //   is24Hour={true}
// //           display="default"
// //           onChange={onChange}
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // export default DatePicker;