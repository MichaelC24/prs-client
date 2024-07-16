import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';
import { UserGetComponent } from './prs/user/user-view/user-view.component';
import UserChangeComponent from './prs/user/user-change/user-change.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},// route that excutes when you first start your application and its only done once
  {path: "user/list", component: UserListComponent}, // tells it were to go when the list method is called from the user class
  {path: "user/view/:id",component: UserGetComponent}, //when you put :[variableName] the : declares it as a variable
  {path: "home",component: HomeComponent},
  {path: "about",component: AboutComponent},
  {path: "user/change/:id", component:UserChangeComponent},
  {path: "user/create", component: UserCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
