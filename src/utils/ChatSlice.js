import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        message: [],
    },
    reducers: {
        addChat(state, action) {
            state.message.unshift(action.payload);
        }
    }

});

export const { addChat } = ChatSlice.actions
export default ChatSlice.reducer