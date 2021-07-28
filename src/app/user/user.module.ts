import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SortUserPipe } from '../sortUser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserFormsComponent } from './add-user-forms/add-user-forms.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { services } from './store/services';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { USERS_STATE } from './store/state';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { CatsEditComponent } from './cats/cats-edit.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        CollapseModule,
        ReactiveFormsModule,
        CommonModule,
        StoreModule.forFeature(USERS_STATE, reducers),
        EffectsModule.forFeature(effects),
    ],
    declarations: [
        UserComponent,
        EditUserComponent,
        SortUserPipe,
        SearchUserComponent,
        AddUserComponent,
        AddUserFormsComponent,
        UserDetailComponent,
        CatsEditComponent
    ],
    providers: [...services]
})
export class UserModule { };
