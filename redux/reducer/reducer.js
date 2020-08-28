import { ADD_TODO, REMOVE_TODO, TOGGLE_ALARM, SET_ALARM, SET_STORAGE_DATA, SHOW_CLOCK } from "../actions/actionTypes"

const initialState = {
    items : [],
    // text: ''
    // toggle: false,
    alarms: [],
    modal: false,
    clock: false
}

const reducer = (state = initialState, action) =>{
    console.log(state.alarms);
    
    switch(action.type){        
        case ADD_TODO : return{
            ...state,
            items:[...state.items, action.payload],
        }
        case REMOVE_TODO: return{
            ...state,
            items:  state.items.filter(item =>
                item.id!== action.payload)
        }
        case TOGGLE_ALARM: return{
            ...state,
            clock: !state.clock
        }
        case SET_ALARM: return{
            ...state,
            alarms:[...state.alarms, action.payload]
        }
        case SET_STORAGE_DATA : return{
            ...state,
            items: action.payload
        }
        case SHOW_CLOCK: return{
            clock: !state.clock
        }
        default: return state
    }
}

export default reducer