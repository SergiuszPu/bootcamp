import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserDetailComponent } from './user-detail/user-detail.component';
// import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
