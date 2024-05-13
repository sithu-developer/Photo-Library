import { config } from "@/general/config";
import { GetUserOptions, SignInUserOptions, UserInitialState, UserOptions } from "@/types/user";
import { User } from "@prisma/client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState : UserInitialState  = {
    item : null,
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

export const newUser = createAsyncThunk("userSlice/newUser" , async( options : UserOptions , thunkApi) => {
    const { name , email , password , gender , onError , onSuccess } = options;
    try {
        const response = await fetch(`${config.apiBaseUrl}/user` , {
            method : "POST",
            headers : {
                "Content-Type" : "applicatioin/json"
            },
            body : JSON.stringify({ name , email , password , gender })
        });
        const  { user  , exist } = await response.json();
        console.log(user , " and ", exist)
        if( !exist ) thunkApi.dispatch(setUser(user));
        onSuccess && onSuccess( { email , exist } );
    } catch (err) {
        onError && onError();
    }
})

export const signInUser = createAsyncThunk("userSlice/signIn" , async( options : SignInUserOptions , thunkApi ) => {
    const { email , password , onError , onSuccess } = options;
    try {
        const response = await fetch(`${config.apiBaseUrl}/user?email=${email}&password=${password}`)
        const { user , isPasswordIncorrect } = await response.json();
        if( !isPasswordIncorrect ) thunkApi.dispatch(setUser( user ));
        onSuccess && onSuccess(isPasswordIncorrect);
    } catch(err) {
        onError && onError()
    }
})

const userSlice = createSlice({
    name : "userSlice",
    initialState ,
    reducers : {
        setUser : ( state , action : PayloadAction<User>) => {
            state.item =  action.payload ;
            localStorage.setItem("emailId" , String(action.payload.id) )
        },
        removeUser : ( state ) => {
            localStorage.removeItem("emailId");
            state.item = null;
        }
    },
})

export const { setUser , removeUser } = userSlice.actions;

export default userSlice.reducer;