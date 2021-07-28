import { catsReducer } from "./cats/cats.reducers";
import { usersReducer } from "./users/users.reducers";

export const reducers = {
    users: usersReducer,
    cats: catsReducer
}

