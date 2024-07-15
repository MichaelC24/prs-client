import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';

const routes: Routes = [
  {path: "", redirectTo: "/user", pathMatch: "full"},// route that excutes when you first start your application and its only done once
  {path: "user/list", component: UserListComponent}, // tells it were to go when the list method is called from the user class
  {path: "home",component: HomeComponent},
  {path: "about",component: AboutComponent}
  //{path: "user/get", component: User}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
