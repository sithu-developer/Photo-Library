import { User } from "@prisma/client";

export interface UserInitialState {
    item : User | null;
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
    password : string;
    rePassword : string ;
    gender : "male" | "female" | "other";
}

export interface SignInUserOptions extends BaseOptions {
    email : string;
    password : string;
}


export interface GetUserOptions extends BaseOptions {
    emailId : number;
}

export interface OnSuccessUserCheck {
    exist ?: Boolean;
    email : string;
}

export interface UpdatedUserOptions extends User , BaseOptions {
    
}