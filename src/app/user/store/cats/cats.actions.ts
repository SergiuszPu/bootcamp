import { createAction, props } from "@ngrx/store";
import { setCatsAction } from "./cats.model";

export const loadCats = createAction('[Cats] load cats')
export const setCats = createAction('[Cats] set cats', props<setCatsAction>())