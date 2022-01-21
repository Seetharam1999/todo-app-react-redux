import { ADD_ITEM } from './addItemTypes'

export const addItem = () => {
    return {
        type: ADD_ITEM
    }
}

export const delItem = () => {
    return {
        type: DEL_ITEM
    }
}