import { User } from "@prisma/client";

export interface UserInitialState {
    items : User[];
    isLoading : Boolean;
    error : Error | null;
}

export interface BaseOptions {

}

export interface UserOptions extends BaseOptions { 
    email : string;
    name : string;
    password : number;
    rePassword : number ;
}