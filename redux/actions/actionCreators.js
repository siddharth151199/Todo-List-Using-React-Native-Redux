import { ADD_TODO, REMOVE_TODO, TOGGLE_ALARM, SET_ALARM, SET_STORAGE_DATA, SHOW_TIMER, SHOW_CLOCK } from "./actionTypes";

export function addTodo(value){
    return{
        type: ADD_TODO,
        payload: value
    }
}
export function removeTodo(key){
    return{
        type: REMOVE_TODO,
        payload: key
    }
}

export function toggleAlarm(){
    return{
        type: TOGGLE_ALARM,
        }
}
export function setStorageData(data){
    return{
        type: SET_STORAGE_DATA,
        payload: data
    }
}
export function setAlarm(alarm){
    return{
        type: SET_ALARM,
        payload: alarm,
    }
}
