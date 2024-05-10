import { User } from "@prisma/client";

export interface UserInitialState {
    items : User[];
    isLoading : Boolean;
    error : Error | null;
}

export interface BaseOptions {
    onError ?: (value ?: any ) => void;
    onSuccess ?: (value ?: any ) => void;
}

export interface UserOptions extends BaseOptions { 
    email : string;
    name : string;
    password : number;
    rePassword : number ;
}

export interface SignInUserOptions extends BaseOptions {
    email : string;
    password : number;
}


export interface GetUserOptions extends BaseOptions {
    emailId : number;
}

export interface OnSuccessUserCheck {
    exist ?: Boolean;
    user : User
}