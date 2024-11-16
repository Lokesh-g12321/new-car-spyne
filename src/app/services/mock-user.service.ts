// mock-user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockUserService {
  private users = [
    { username: 'testuser', password: 'password123' },
    { username: 'admin', password: 'admin123' },
  ];

  validateUser(username: string, password: string): boolean {
    return this.users.some(
      (user) => user.username === username && user.password === password
    );
  }

  registerUser(username: string, password: string): boolean {
    if (this.users.some((user) => user.username === username)) {
      return false; 
    }
    this.users.push({ username, password });
    return true;
  }
}