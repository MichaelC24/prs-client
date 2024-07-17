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
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductViewComponent } from './prs/product/product-view/product-view.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductChangeComponent } from './prs/product/product-change/product-change.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestChangeComponent } from './prs/request/request-change/request-change.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestViewComponent } from './prs/request/request-view/request-view.component';
import { RequestRemoveComponent } from './prs/request/request-remove/request-remove.component';
import { ProductRemoveComponent } from './prs/product/product-remove/product-remove.component';
import { RequestReviewComponent } from './prs/request/request-review/request-review.component';

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
    VendorChangeComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductCreateComponent,
    ProductChangeComponent,
    RequestListComponent,
    RequestChangeComponent,
    RequestCreateComponent,
    RequestViewComponent,
    RequestRemoveComponent,
    ProductRemoveComponent,
    RequestReviewComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()], 
  bootstrap: [AppComponent]
})
export class AppModule { }
