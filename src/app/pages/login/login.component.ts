import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor( private formBuilder: FormBuilder,
  private router: Router, private loginService: LoginService ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  signIn(){
    var loginData = this.loginForm.getRawValue() as LoginModel;
    this.loginService.SigInUser(loginData)
      .subscribe(
        token => {
          var localToken = token;
          localStorage.setItem('Token', localToken);
          this.router.navigate(["/home"]);
        }
      )
  }

  singUp(){

  }

}
