import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from '../user-detail/user-detail.component';

import { UserComponent } from './user.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: ':id',
        component: UserDetailComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}