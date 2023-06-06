import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const userSlice= createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state, action){},
        removeUset(state,action){},
        deleteUsers(state, action){}
    }
})

export default userSlice.reducer