import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {
    path: "user-profile",
    component: UserProfileComponent,
  },
  {
    path: "my-order",
    component: UserProfileComponent,
  },
  {
    path: "my-order/:id",
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
