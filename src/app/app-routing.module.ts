import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersExistGuard } from './user-exist-guard';
import { CatsEditComponent } from './user/cats/cats-edit.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [UsersExistGuard]
  },
  {
    path: 'cats', component: CatsEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
