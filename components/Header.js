import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

function Header() {
    return (
        <View style={styles.header}> 
            <Text style={styles.headerTitle} >ADD ITEMS</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 70,
        backgroundColor: '#6a6a6b',
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#eee'
    }
})
export default Header;
