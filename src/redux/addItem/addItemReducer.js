import { ADD_ITEM } from './addItemTypes'


const intialState = () => {
    return{
        content: ""
    }
}

const addReducer = (state = intialState, action) => {

        switch(action.type) {
            case ADD_ITEM: return{
                ...state,
                content: state.content
            }
            case DEL_ITEM: return{
                ...state,
                content: state.content
            }
            default: return{
                state
            }
        }
    
}

export default addReducer;