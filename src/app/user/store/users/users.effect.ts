import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { switchMap, map, catchError, tap, mergeMap } from "rxjs/operators";
import { UsersAPIService } from "src/app/user-api.service";
import { Action } from '@ngrx/store';
import { addUser, addUserSuccess, loadUsers, removeUser, removeUserSuccess, setUsers } from './users.actions'
import { User } from "./users.model";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class UsersEffect {
    constructor(private usersService: UsersAPIService, private actions$: Actions, private http: HttpClient) { }

    loadUsers$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUsers),
            switchMap(() =>
                this.usersService.getUsers().pipe(
                    tap(el => console.log('users', el)),
                    map((users: User[]) => setUsers({ users })),
                    catchError(() => of({ type: 'SOME_ERROR' }))
                )
            )
        )
    )

    removeUsers$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(removeUser),
            mergeMap((action: { userId: number }) =>
                this.http.delete(`http://localhost:3000/users/ ${action.userId}`).pipe(
                    map(() => removeUserSuccess()),
                    catchError(() => of({ type: 'SOME_ERROR' }))
                )
            )
        )
    )

    addUser$: Observable<Action> = createEffect(() => 
            this.actions$.pipe(
                ofType(addUser),
                mergeMap((action: { user: User[]}) => 
                    this.http.post(`http://localhost:3000/users/`, action.user).pipe(
                        map(() => addUserSuccess()),
                        catchError(() => of({ type: 'SOME_ERROR' }))
                    )
                )
            )
    )

    reloadConsulKeyValuesSuccess$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(removeUser, addUser),
            map(() => loadUsers())
        )
    );
}


// removeConsulKeyValue$: Observable<Action> = createEffect(() =>
// this.actions$.pipe(
//   ofType(removeConsulKeyValue),
//   mergeMap((action: RemoveConsulKeyValueAction) =>
//     this.httpClient
//       .delete<boolean>(ConsulService.parseUrl(ApiV1.consulKeyValuesByKey, { key: action.consulKey }))
//       .pipe(
//         map(() => removeConsulKeyValueSuccess()),
//         catchError(() => of({ type: 'SOME_ERROR' }))
//       )
//   )
// )
// );

    // removeUsers$: Observable<Action> = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(removeUser),
    //         mergeMap((action: { userId: number }) =>
    //             this.usersService.deleteUser(action.userId).pipe(
    //                 // tap(el => console.log('users', el)),
    //                 map(() => removeUserSuccess()),
    //                 catchError(() => of({ type: 'SOME_ERROR' }))
    //             )
    //         )
    //     )
    // )
