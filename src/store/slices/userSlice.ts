import { UserInitialState } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState : UserInitialState  = {
    items : [],
    isLoading : false,
    error : null
}

const userSlice = createSlice({
    name : "userSlice",
    initialState ,
    reducers : {},
})

export default userSlice.reducer;