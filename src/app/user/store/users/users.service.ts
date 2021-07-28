import { Injectable } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, loadUsers, removeUser } from './users.actions';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(private store: Store<any>) { }
    
    loadUser(): void {
        this.store.dispatch(loadUsers())
    }

    getUsers(): Observable<User[]> {
        return this.store.pipe(select(selectFeatureUsers));
    }

    addUser(user: User[]) {
        return this.store.dispatch(addUser({user}))
    }

    removeUser(userId: number) {
        this.store.dispatch(removeUser({userId}))
    }
}

export interface UsersState {
    users: User[];
}

export interface AppState {
    USERS_STATE: UsersState;
}

export const selectUsersFeature = (state: AppState) => state.USERS_STATE;

export const selectFeatureUsers = createSelector(
    selectUsersFeature,
    (state: UsersState) => state.users
);
