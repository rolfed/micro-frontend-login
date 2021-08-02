import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TitleModule } from '@umpqua-bank/component-library';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', // default route for login application
    component: LoginComponent
  }
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TitleModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
