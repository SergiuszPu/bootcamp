import { Injectable } from "@angular/core";
import { createSelector, select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadCats } from "./cats.actions";

@Injectable() 
export class CatsService {
    constructor(private store: Store<any>){}

    getCats(): Observable<string[]>{
        return this.store.pipe(select(selectFeatureCats));
    }

    loadCats(): void {
        this.store.dispatch(loadCats())
    }
}

export interface CatsState {
    cats: string[]
}

export interface AppState {
    USERS_STATE: CatsState ;
}

export const selectUsersFeature = (state: AppState) => state.USERS_STATE; 

export const selectFeatureCats = createSelector(
    selectUsersFeature,
    (state: CatsState) => state.cats
)