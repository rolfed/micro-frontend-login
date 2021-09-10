import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'umpua-bank-login',
  template: `
    <main class="container p-5">
      <div class="row">
        <div class="col-6 offset-3">
          <h1>Login</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-6 offset-3">
          <form [formGroup]="loginFG">
            <div class="form-group mb-3">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                [formControl]="emailFC"
              />
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                [formControl]="passwordFC"
              />
            </div>

            <div class="form-group mb-5">
              <button
                type="submit"
                class="btn btn-primary"
                (click)="onSubmit()"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  `,
  styles: []
})
export class LoginComponent {
  public emailFC: FormControl = new FormControl('', []);
  public passwordFC: FormControl = new FormControl('', []);
  public loginFG: FormGroup = new FormGroup({
    login: this.emailFC,
    password: this.passwordFC
  });

  constructor(private router: Router) {}

  public onSubmit(): void {
    this.router.navigate(['/about']);
  }
}
