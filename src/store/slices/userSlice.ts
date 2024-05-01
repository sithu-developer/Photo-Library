import { config } from "@/general/config";
import { UserInitialState, UserOptions } from "@/types/user";
import { User } from "@prisma/client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState : UserInitialState  = {
    items : [],
    isLoading : false,
    error : null
}

export const userFunction = createAsyncThunk("userSlice" , async( options : UserOptions , thunkApi) => {
    const { name , email , password , onError , onSuccess } = options;
    console.log( "one " , options)
    try {
        const response = await fetch(`${config.apiBaseUrl}/user` , {
            method : "POST",
            headers : {
                "Content-Type" : "applicatioin/json"
            },
            body : JSON.stringify({ name , email , password })
        });
        const { user } = await response.json();
        console.log("returned " , user)
        thunkApi.dispatch(addUser(user))
        onSuccess && onSuccess();
    } catch (err) {
        onError && onError();
    }
})

const userSlice = createSlice({
    name : "userSlice",
    initialState ,
    reducers : {
        addUser : ( state , action : PayloadAction<User> ) => {
            state.items =  [...state.items , action.payload ];
        }
    },
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer;