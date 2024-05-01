import { config } from "@/general/config";
import { GetUserOptions, UserInitialState, UserOptions } from "@/types/user";
import { User } from "@prisma/client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState : UserInitialState  = {
    items : [],
    isLoading : false,
    error : null
}

export const getUser = createAsyncThunk("userSlice" , async( options : GetUserOptions , thunkApi) => {
    const { emailId , onError , onSuccess } = options;
    try { 
        const response = await fetch(`${config.apiBaseUrl}/user?emailId=${emailId}`);
        const { user } = await response.json();
        thunkApi.dispatch(setUser(user));
        onSuccess && onSuccess();
    } catch ( err ) {
        onError && onError();
    }
})

export const newUser = createAsyncThunk("userSlice" , async( options : UserOptions , thunkApi) => {
    const { name , email , password , onError , onSuccess } = options;
    try {
        const response = await fetch(`${config.apiBaseUrl}/user` , {
            method : "POST",
            headers : {
                "Content-Type" : "applicatioin/json"
            },
            body : JSON.stringify({ name , email , password })
        });
        const  { user  , exist } = await response.json();
        thunkApi.dispatch(addUser(user))
        onSuccess && onSuccess( { user , exist } );
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
        },
        setUser : ( state , action : PayloadAction<User>) => {
            state.items = [ action.payload ];
        }
    },
})

export const {addUser , setUser } = userSlice.actions;

export default userSlice.reducer;