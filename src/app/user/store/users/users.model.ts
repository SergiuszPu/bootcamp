import { Action } from '@ngrx/store';


export interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    type: string,
    date: string
}

export interface SetUsersAction extends Partial<Action> {
    users: User[];
}

export interface GetUserAction extends Partial<Action> {
    userId: number;
}

export interface AddUser extends Partial<Action> {
    user: User[];
}

export interface RemoveUserAction extends Partial<Action> {
    userId: number;
}