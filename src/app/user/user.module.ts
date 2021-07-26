import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { SortUserPipe } from '../sortUser';
import { SearchUserComponent } from '../search-user/search-user.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from '../add-user/add-user.component';
import { AddUserFormsComponent } from '../add-user-forms/add-user-forms.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        CollapseModule.forRoot(),
        ReactiveFormsModule,
    ],
    declarations: [
        UserComponent,
        EditUserComponent,
        SortUserPipe,
        SearchUserComponent,
        AddUserComponent,
        AddUserFormsComponent,
        UserDetailComponent,
    ]
})
export class UserModule { };
