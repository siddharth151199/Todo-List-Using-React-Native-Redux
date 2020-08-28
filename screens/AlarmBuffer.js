import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import moment from 'moment'
import connect from 'react-redux/lib/connect/connect';
// import Constants from 'expo-constants';

// https://github.com/expo/expo/issues/1141

const source = require('../assets/backgroundMusic.mp3');

class AlarmBuffer extends Component {
    state ={
        currentTime:'',
        status: 'pause'
    }
    componentDidMount(){
      this.alarmCheck =   setInterval(() => {
        this.checkAlarm();
        }, 1000);
    }

    checkAlarm(){
    var time = moment().format('DD-MM-YYYY, HH:mm') //returns Wed 04/10/2017
    this.props.alarms.map(alarm =>{
        if(alarm.time === time){
            console.log('time has been matched');
            this.playMusic();
            clearInterval(this.alarmCheck)
        }
    })
           
    }

    playMusic = async() =>{
        const {sound} = await Audio.Sound.createAsync(
            source,
            {
                shouldPlay: true,
                isLooping: true
            }
            )
            this.sound = sound
        }
        pauseMusic = async() =>{
        this.sound.pauseAsync();
        }
        playAgain = async() =>{
            this.sound.playAsync();
        }
  render() {
    return (
      <View>
        {/* <TouchableOpacity style={styles.button} onPress={this.playMusic}>
            <Text style={styles.buttonText}>
                trial
            </Text>
          </TouchableOpacity>
          <Button title="|>" onPress={this.playAgain} />

          <Button title="stop" onPress={this.pauseMusic} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    // paddingTop: Constants.statusBarHeight,
  },
  button: {
    width: 256,
    height: 256/1.618,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

const mapStateToProps = state =>{
    return{
        alarms: state.alarms
    }
  }
  const mapStateToDispatch = dispatchEvent =>{
    return{
      toggleAlarm : () => dispatchEvent(toggleAlarm()),
      setAlarm: (alarm) => dispatchEvent(setAlarm(alarm))
    }
  }
export default connect(mapStateToProps, mapStateToDispatch)(AlarmBuffer);