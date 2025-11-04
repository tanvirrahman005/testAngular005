import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit, AfterViewInit{
trafficPeriod = '30d';
  showSystemCheckModal = false;
  performanceScore = 94;
  revenueStats = {
    current: 45280,
    change: 12.5
  };

  // Chart instances
  trafficChart: any;
  userDistributionChart: any;
  revenueChart: any;
  performanceChart: any;

  systemMetrics = [
    {
      icon: 'fas fa-users',
      title: 'Total Users',
      value: '12,458',
      trend: 8.2,
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      critical: false
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Total Orders',
      value: '3,245',
      trend: 15.7,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      critical: false
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Revenue',
      value: '$45.2K',
      trend: 12.5,
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      critical: false
    },
    {
      icon: 'fas fa-exclamation-triangle',
      title: 'Active Issues',
      value: '3',
      trend: -25.0,
      color: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      critical: true
    },
    {
      icon: 'fas fa-server',
      title: 'Server Load',
      value: '68%',
      trend: 5.3,
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      critical: false
    },
    {
      icon: 'fas fa-database',
      title: 'Storage Used',
      value: '82%',
      trend: 8.1,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      critical: true
    }
  ];

  managementTools = [
    {
      icon: 'fas fa-user-cog',
      title: 'User Management',
      description: 'Manage user accounts, permissions, and roles',
      route: '/admin/users',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      stats: { value: '12,458', label: 'Total Users' },
      notification: '5'
    },
    {
      icon: 'fas fa-cogs',
      title: 'System Settings',
      description: 'Configure system-wide settings and preferences',
      route: '/admin/settings',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      stats: null,
      notification: null
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Analytics',
      description: 'View detailed analytics and reports',
      route: '/admin/analytics',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      stats: { value: '94%', label: 'Uptime' },
      notification: null
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security',
      description: 'Monitor security events and configure protections',
      route: '/admin/security',
      color: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      stats: { value: '3', label: 'Active Threats' },
      notification: '1'
    },
    {
      icon: 'fas fa-database',
      title: 'Database',
      description: 'Manage database operations and backups',
      route: '/admin/database',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      stats: { value: '82%', label: 'Storage Used' },
      notification: null
    },
    {
      icon: 'fas fa-file-invoice',
      title: 'Billing',
      description: 'Manage subscriptions and payment processing',
      route: '/admin/billing',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      stats: { value: '$45.2K', label: 'Revenue' },
      notification: '2'
    }
  ];

  systemActivity = [
    {
      type: 'info',
      icon: 'fas fa-user-plus',
      text: 'New user registration: John Smith',
      time: '2 minutes ago',
      user: 'system',
      ip: '192.168.1.100',
      severity: 'low'
    },
    {
      type: 'warning',
      icon: 'fas fa-exclamation-triangle',
      text: 'High server load detected on web-server-02',
      time: '15 minutes ago',
      user: 'monitor',
      ip: '10.0.1.5',
      severity: 'medium'
    },
    {
      type: 'success',
      icon: 'fas fa-check-circle',
      text: 'Database backup completed successfully',
      time: '1 hour ago',
      user: 'backup-service',
      ip: '10.0.2.8',
      severity: 'low'
    },
    {
      type: 'error',
      icon: 'fas fa-times-circle',
      text: 'Payment gateway connection timeout',
      time: '3 hours ago',
      user: 'payment-service',
      ip: '10.0.3.12',
      severity: 'high'
    }
  ];

  activeAlerts = [
    {
      id: 1,
      level: 'critical',
      icon: 'fas fa-server',
      message: 'Database server running at 95% capacity',
      time: '2 hours ago'
    },
    {
      id: 2,
      level: 'warning',
      icon: 'fas fa-shield-alt',
      message: 'Multiple failed login attempts detected',
      time: '5 hours ago'
    },
    {
      id: 3,
      level: 'info',
      icon: 'fas fa-certificate',
      message: 'SSL certificate expires in 15 days',
      time: '1 day ago'
    }
  ];

  quickStats = [
    { label: 'New Users Today', value: '45', trend: 'up' },
    { label: 'Orders Today', value: '128', trend: 'up' },
    { label: 'Support Tickets', value: '23', trend: 'down' },
    { label: 'System Errors', value: '2', trend: 'down' }
  ];

  maintenanceTasks = [
    { name: 'Database Optimization', schedule: 'Daily', status: 'completed' },
    { name: 'Log Rotation', schedule: 'Weekly', status: 'pending' },
    { name: 'Security Scan', schedule: 'Daily', status: 'running' }
  ];

  recentUsers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      role: 'Premium User',
      status: 'active',
      lastActivity: '2 minutes ago'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      role: 'Admin',
      status: 'active',
      lastActivity: '15 minutes ago'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      role: 'Free User',
      status: 'inactive',
      lastActivity: '3 hours ago'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      role: 'Premium User',
      status: 'pending',
      lastActivity: '1 day ago'
    }
  ];

  systemInfo = [
    { label: 'Platform Version', value: 'v2.4.1', status: 'good' },
    { label: 'PHP Version', value: '8.1.12', status: 'good' },
    { label: 'Database Version', value: 'MySQL 8.0', status: 'good' },
    { label: 'Server Uptime', value: '45 days', status: 'good' },
    { label: 'Memory Usage', value: '68%', status: 'warning' },
    { label: 'CPU Load', value: '42%', status: 'good' }
  ];

  systemChecks = [
    { name: 'Database Connection', status: 'running' },
    { name: 'File System', status: 'passed' },
    { name: 'API Endpoints', status: 'passed' },
    { name: 'Email Service', status: 'failed' },
    { name: 'Cache System', status: 'passed' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadSystemData();
  }

  ngAfterViewInit(): void {
    this.initCharts();
  }

  loadSystemData(): void {
    // Load system data based on selected period
    console.log('Loading system data for period:', this.trafficPeriod);
  }

  initCharts(): void {
    this.createTrafficChart();
    this.createUserDistributionChart();
    this.createRevenueChart();
    this.createPerformanceChart();
  }

  createTrafficChart(): void {
    const ctx = document.getElementById('trafficChart') as HTMLCanvasElement;
    this.trafficChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Page Views',
            data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Unique Visitors',
            data: [8000, 12000, 10000, 18000, 15000, 22000, 20000],
            borderColor: '#fa709a',
            backgroundColor: 'rgba(250, 112, 154, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  createUserDistributionChart(): void {
    const ctx = document.getElementById('userDistributionChart') as HTMLCanvasElement;
    this.userDistributionChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Free Users', 'Premium Users', 'Admin Users', 'Inactive Users'],
        datasets: [
          {
            data: [45, 35, 5, 15],
            backgroundColor: [
              '#667eea',
              '#fa709a',
              '#43e97b',
              '#ff6b6b'
            ],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        cutout: '65%'
      }
    });
  }

  createRevenueChart(): void {
    const ctx = document.getElementById('revenueChart') as HTMLCanvasElement;
    this.revenueChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Revenue',
            data: [12500, 18900, 15800, 25200],
            backgroundColor: 'rgba(67, 233, 123, 0.8)',
            borderRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  createPerformanceChart(): void {
    const ctx = document.getElementById('performanceChart') as HTMLCanvasElement;
    this.performanceChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Uptime', 'Speed', 'Security', 'Reliability', 'Scalability'],
        datasets: [
          {
            label: 'Performance',
            data: [95, 88, 92, 90, 85],
            backgroundColor: 'rgba(102, 126, 234, 0.2)',
            borderColor: '#667eea',
            pointBackgroundColor: '#667eea',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#667eea'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              display: false
            }
          }
        }
      }
    });
  }

  updateTrafficChart(): void {
    this.loadSystemData();
    if (this.trafficChart) {
      this.trafficChart.update();
    }
  }

  runSystemCheck(): void {
    this.showSystemCheckModal = true;
    // Simulate system check
    setTimeout(() => {
      this.systemChecks = [
        { name: 'Database Connection', status: 'passed' },
        { name: 'File System', status: 'passed' },
        { name: 'API Endpoints', status: 'passed' },
        { name: 'Email Service', status: 'passed' },
        { name: 'Cache System', status: 'passed' }
      ];
    }, 2000);
  }

  closeSystemCheckModal(): void {
    this.showSystemCheckModal = false;
  }

  runDetailedCheck(): void {
    console.log('Running detailed system check...');
    this.closeSystemCheckModal();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  resolveAlert(alertId: number): void {
    this.activeAlerts = this.activeAlerts.filter(alert => alert.id !== alertId);
  }

  runMaintenance(): void {
    console.log('Running maintenance tasks...');
    // Implement maintenance logic
  }

  viewUser(userId: number): void {
    this.router.navigate(['/admin/users', userId]);
  }

  editUser(userId: number): void {
    this.router.navigate(['/admin/users', userId, 'edit']);
  }

  backupSystem(): void {
    console.log('Starting system backup...');
    // Implement backup logic
  }

  clearCache(): void {
    console.log('Clearing system cache...');
    // Implement cache clearing logic
  }

  viewLogs(): void {
    this.router.navigate(['/admin/logs']);
  }

  systemSettings(): void {
    this.router.navigate(['/admin/settings']);
  }

  // Utility function for template
  Math = Math;
}
