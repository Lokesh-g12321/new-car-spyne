import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  [x: string]: any;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      userName: [''], // No Validators
      password: ['']  // No Validators
    });
  }


  onLogin() {
    this.router.navigate(['/home']);
  //   if (this.loginForm.valid) {
  //     const formData = this.loginForm.value;
  //     console.log('Login Data:', formData);
  //     // Handle login logic here
  //   } else {
  //     console.log('Form is invalid');
  //   }
  }
}
