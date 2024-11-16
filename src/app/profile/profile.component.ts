import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
userEmail: any;
password: any;

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    } else {
      console.error('No username found in local storage');
    }
  }

  saveProfile() {
    if (this.username) {
      localStorage.setItem('username', this.username);
      console.log('Username saved:', this.username);
    } else {
      console.error('Username cannot be empty');
    }
  }
}