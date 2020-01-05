import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from '../../components/auth/login/login.component';
import {SignupComponent} from '../../components/auth/signup/signup.component';
import {AuthComponent} from '../../components/auth/auth.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    AuthComponent
  ]
})
export class AuthModule {
}
