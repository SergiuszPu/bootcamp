import { createAction, props } from "@ngrx/store";
import { SetUsersAction, GetUserAction, RemoveUserAction, AddUser } from './users.model';

export const loadUsers = createAction('[Users] load users')
export const setUsers = createAction('[Users] set users', props<SetUsersAction>())
export const setUsersSuccess = createAction('[Users] set users success') 
export const getUser = createAction('[Users] get user', props<GetUserAction>())
export const getUserSuccess = createAction('[Users] set users success') 
export const addUser = createAction('[Users] add user', props<AddUser>())
export const addUserSuccess = createAction('[Users] add user success')
export const removeUser = createAction('[Users] remove user', props<RemoveUserAction>())
export const removeUserSuccess = createAction('[Users] remove users success') 
