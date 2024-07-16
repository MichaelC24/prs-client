import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //drop downs etc..
import { provideHttpClient } from '@angular/common/http'; //allows you to make calls to the backend controller in c#

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { MenuComponent } from './prs/menu/menu/menu.component';
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

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    UserGetComponent,
    UserChangeComponent,
    UserCreateComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorViewComponent,
    VendorCreateComponent,
    VendorChangeComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()], 
  bootstrap: [AppComponent]
})
export class AppModule { }
