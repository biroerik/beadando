import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { DvdFormComponent } from './dvd-form/dvd-form.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: DvdListComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'dvd-form',
    component: DvdFormComponent
  },
  {
    path: 'user-form',
    component: UserFormComponent
  },
  {
    path: 'category-form',
    component: CategoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
