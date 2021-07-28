import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from '@ngrx/store';
import { Observable, of } from "rxjs";
import { catchError, switchMap,tap, map } from "rxjs/operators";
import { UsersAPIService } from "src/app/user-api.service";
import { loadCats, setCats } from "./cats.actions"


@Injectable()
export class CatsEffect {
    constructor(private catsService: UsersAPIService, private actions$: Actions) { }

    loadCats$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCats),
            switchMap(() =>
                this.catsService.getCats().pipe(
                    tap((data) => console.log('cats', data)),
                    map((cats: string[]) => setCats({ cats })),
                    catchError(() => of({ type: 'SOME_ERROR' }))
                )
            )
        )
    )
}