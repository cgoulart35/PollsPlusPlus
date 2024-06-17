import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false; // Set this based on your login logic

  constructor() { }

  login(email: string | undefined, password: string | undefined) {
    // Implement your login logic here
  }

  updateProfile(email: string | undefined, password: string | undefined) {
    // Implement your profile update logic here
  }
}
