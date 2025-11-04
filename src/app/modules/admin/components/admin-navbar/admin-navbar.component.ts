import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit{
isLoggedIn = true; // Change this based on your auth logic
  adminName = 'Admin User';
  adminRole = 'Super Administrator';
  adminAvatar = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face';
  isOnline = true;
  
  // System status
  systemStatus = 'Online';
  usersOnline = 142;
  securityLevel = 'High';
  alertCount = 2;
  lastBackup = '2 hours ago';

  // Quick stats
  quickStats = [
    { label: 'New Users', value: '24', trend: 'up' },
    { label: 'Revenue', value: '$2.4K', trend: 'up' },
    { label: 'Orders', value: '156', trend: 'down' },
    { label: 'Tickets', value: '12', trend: 'up' },
    { label: 'Server Load', value: '42%', trend: 'down' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize authentication status
    this.checkAuthStatus();
    this.loadSystemStatus();
  }

  checkAuthStatus(): void {
    // Implement your authentication check logic here
    const token = localStorage.getItem('adminToken');
    this.isLoggedIn = !!token;
    
    if (this.isLoggedIn) {
      this.fetchAdminData();
    }
  }

  fetchAdminData(): void {
    // Mock admin data - replace with actual API call
    this.adminName = 'Admin User';
    this.adminRole = 'Super Administrator';
    this.isOnline = true;
  }

  loadSystemStatus(): void {
    // Mock system status - replace with actual API call
    setInterval(() => {
      this.usersOnline = Math.floor(Math.random() * 50) + 100;
    }, 30000);
  }

  onAdminSearch(event: any): void {
    const query = event.target.value;
    if (query.length > 2) {
      console.log('Admin search:', query);
      // Implement admin search functionality
    }
  }

  clearCache(): void {
    console.log('Clearing cache...');
    // Implement cache clearing logic
    // Show success message
  }

  refreshData(): void {
    console.log('Refreshing data...');
    // Implement data refresh logic
    this.loadSystemStatus();
  }

  showSystemInfo(): void {
    console.log('Showing system info...');
    // Implement system info modal
  }

  impersonateUser(): void {
    console.log('Impersonating user...');
    // Implement user impersonation logic
  }

  logout(): void {
    // Implement logout logic
    localStorage.removeItem('adminToken');
    this.isLoggedIn = false;
    this.router.navigate(['/admin/login']);
    
    console.log('Admin logged out successfully');
  }
}
