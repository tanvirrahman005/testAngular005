import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit{
isLoggedIn = false; // Change this based on your auth logic
  userName = 'John Doe';
  userRole = 'Premium User';
  userAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
  lastLogin = '2 hours ago';
  notificationCount = 3;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize authentication status
    this.checkAuthStatus();
  }

  checkAuthStatus(): void {
    // Implement your authentication check logic here
    // This is a mock implementation
    const token = localStorage.getItem('userToken');
    this.isLoggedIn = !!token;
    
    if (this.isLoggedIn) {
      // Fetch user data from your service
      this.fetchUserData();
    }
  }

  fetchUserData(): void {
    // Mock user data - replace with actual API call
    this.userName = 'John Doe';
    this.userRole = 'Premium User';
    this.lastLogin = '2 hours ago';
    this.notificationCount = 3;
  }

  logout(): void {
    // Implement logout logic
    localStorage.removeItem('userToken');
    this.isLoggedIn = false;
    this.router.navigate(['/user/login']);
    
    // Show logout message
    console.log('User logged out successfully');
  }

  // Optional: Method to handle search
  onSearch(query: string): void {
    console.log('Search query:', query);
    // Implement search functionality
  }
}
