import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockUserService } from '../services/mock-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private userService: MockUserService, private router: Router, private fb: FormBuilder) {
    // Initialize the form group with controls
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required]] // Add confirm password control
    }, { validator: this.passwordMatcher });
  }

  ngOnInit(): void {}

  onSignUp(): void {
    if (this.signupForm.valid) {
      const { username, password, cpassword } = this.signupForm.value;

      // Check if passwords match
      if (password !== cpassword) {
        this.errorMessage = 'Passwords do not match.';
        this.successMessage = '';
        return;
      }

      // Check if the username already exists in the mock user service
      if (this.userService.registerUser(username, password)) {
        // Log the credentials to the console for testing purposes
        console.log('Registered User:', { username, password });

        // Store the username in local storage
        localStorage.setItem('username', username);
        this.successMessage = 'Registration successful!';
        this.errorMessage = '';

        // Redirect to the login page after successful registration
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = 'Username already exists.';
        this.successMessage = '';
      }
    } else {
      this.errorMessage = 'Please fill in the form correctly.';
      this.successMessage = '';
    }
  }

  // Custom validator for password matching
  passwordMatcher(group: FormGroup): { [key: string]: boolean } | null {
    if (group.get('password')?.value !== group.get('cpassword')?.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
}
