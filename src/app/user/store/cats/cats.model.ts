import {Action} from '@ngrx/store';

// export interface Cats {
//     name: string
// }

export interface setCatsAction extends Partial<Action> {
    cats: string[]

}