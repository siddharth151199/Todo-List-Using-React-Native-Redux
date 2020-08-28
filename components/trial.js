import React, { Component, useState } from 'react'
import firebase from '../firebase'
import { View, Text, Button } from 'react-native';
export default class trial extends Component {
    componentDidMount(){
        const ref = firebase.database().ref('users/new2/data');
        let values;
        ref.on("value", snap =>{
              values =   snap.forEach(data => {    
                    console.log(data);
                })
                })
                console.log(values);
                 
    }
       showData = () =>{
        const sid = "new2";
        const data = [
             {
            "id": "0.4143465928786555",
            "value": "new item",
          },
           {
            "id": "0.043576488969485294",
            "value": "second item",
          },
        ]
        const ref = firebase.database().ref('users/'+sid);
        // aqdd data
        // ref.set({
        //     data
        // })

        // get data
        // ref.on("value", snap =>{
        //     snap.forEach(data => {
        //         console.log('----');

        //         console.log(data);
        //         console.log('----');
        //     })
            // }) 
    }
    render() {
        return (
            <View style={{margin: 40}}>
                <Button title="show data" onPress={this.showData} />
            </View>
        )
    }
}
