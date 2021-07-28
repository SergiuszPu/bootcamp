import { createReducer, on } from "@ngrx/store";
import { addUser, removeUser, setUsers } from "./users.actions";
import { User } from './users.model';

export const initilState: User[] = [];

export const usersReducer = createReducer(
    initilState,
    on(setUsers, (state, payload) => {
        // console.log('state', state, 'payload', payload);
        return payload.users;
    }),
    // on(removeUser, (state, payload) => {
    //     return state.filter(el => el.id !== payload.userId)
    // }),
)