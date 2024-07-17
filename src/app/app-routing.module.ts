import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';
import { UserGetComponent } from './prs/user/user-view/user-view.component';
import UserChangeComponent from './prs/user/user-change/user-change.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { VendorListComponent } from './prs/Vendor/vendor-list/vendor-list.component';
import { VendorViewComponent } from './prs/Vendor/vendor-view/vendor-view.component';
import { VendorCreateComponent } from './prs/Vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './prs/Vendor/vendor-change/vendor-change.component';
import { Vendor } from './prs/Vendor/vendor.class';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestViewComponent } from './prs/request/request-view/request-view.component';
import { RequestChangeComponent } from './prs/request/request-change/request-change.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},// route that excutes when you first start your application and its only done once
  {path: "user/list", component: UserListComponent}, // tells it were to go when the list method is called from the user class
  {path: "user/view/:id",component: UserGetComponent}, //when you put :[variableName] the : declares it as a variable
  {path: "home",component: HomeComponent},
  {path: "about",component: AboutComponent},
  {path: "user/change/:id", component:UserChangeComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "user/list/user/login",component: UserLoginComponent},
  {path: "vendor/list", component: VendorListComponent},
  {path: "vendor/view/:id", component:VendorViewComponent},
  {path: "vendor/create", component:VendorCreateComponent},
  {path: "vendor/change/:id", component:VendorChangeComponent},
  {path: "product/list", component: ProductListComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "request/list", component: RequestListComponent},
  {path: "request/view/:id", component: RequestViewComponent},
  {path: "request/change/:id",component: RequestChangeComponent},
  {path: "request/create", component: RequestCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
