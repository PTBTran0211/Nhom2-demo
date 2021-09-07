import * as types from "../constants";


export const View = (item, index) => {
    return {
        type: types.CHOOSE_USER,
        item, index
    }
}
export const ChatUser = (content, id) => {
    return {
        type: types.CHAT_USER,
        content, id
    }
}