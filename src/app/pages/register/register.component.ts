import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpModel } from 'src/app/models/signUpModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  singUp(){
    debugger;
    var signUpData = this.signUpForm.getRawValue() as SignUpModel;
    this.registerService.SigUpUser(signUpData)
      .pipe()
      .subscribe(
        data => {
          debugger;
          if(data){
            this.router.navigate(["/login"]);
          }
        });
  }

  back(){
    this.router.navigate(["/login"]);
  }
}
