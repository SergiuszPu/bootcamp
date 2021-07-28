import { createReducer, on } from "@ngrx/store";
import { removeUser } from "../users/users.actions";
import { setCats } from "./cats.actions";

export const initialState : string[] = [];

export const catsReducer = createReducer(
    initialState,
    on(setCats, (state, payload) => {
        return payload.cats
    })
)