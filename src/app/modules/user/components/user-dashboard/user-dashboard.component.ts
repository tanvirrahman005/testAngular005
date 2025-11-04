import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

// Import Chart.js
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit, AfterViewInit {
  selectedPeriod = '30d';
  showExportModal = false;
  goalProgress = 65;
  completedTasks = 13;
  remainingTasks = 7;
  totalTasks = 20;

  // Chart instances
  activityChart: any;
  performanceChart: any;
  distributionChart: any;

  keyMetrics = [
    {
      icon: 'fas fa-eye',
      title: 'Profile Views',
      value: '1,247',
      trend: 12.5,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      highlight: true
    },
    {
      icon: 'fas fa-heart',
      title: 'Likes Received',
      value: '356',
      trend: 8.2,
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      highlight: false
    },
    {
      icon: 'fas fa-share',
      title: 'Content Shared',
      value: '89',
      trend: -3.1,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      highlight: false
    },
    {
      icon: 'fas fa-comment',
      title: 'Comments',
      value: '142',
      trend: 15.7,
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      highlight: false
    }
  ];

  activityChartData = {
    legend: [
      { label: 'Profile Views', color: '#4facfe' },
      { label: 'Likes', color: '#43e97b' },
      { label: 'Shares', color: '#fa709a' }
    ]
  };

  recentActivity = [
    {
      icon: 'fas fa-user-plus',
      text: 'Your profile was viewed by 15 new users',
      time: '2 hours ago',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      details: '+12% from yesterday'
    },
    {
      icon: 'fas fa-thumbs-up',
      text: 'Received 25 likes on your recent post',
      time: '5 hours ago',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      details: 'Engagement rate: 4.2%'
    },
    {
      icon: 'fas fa-share',
      text: 'Your content was shared 8 times',
      time: '1 day ago',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      details: 'Reached 1.2K users'
    },
    {
      icon: 'fas fa-comment',
      text: 'You received 12 new comments',
      time: '2 days ago',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      details: '3 comments need response'
    }
  ];

  achievementStats = {
    total: 24,
    thisMonth: 3,
    inProgress: 5
  };

  streakStats = {
    current: 7,
    longest: 21
  };

  goals = [
    {
      id: 1,
      icon: 'fas fa-users',
      title: 'Grow Network',
      description: 'Connect with 50 new professionals in your industry',
      progress: 75,
      deadline: '2024-03-15',
      completed: false,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 2,
      icon: 'fas fa-certificate',
      title: 'Skill Mastery',
      description: 'Complete advanced certification course',
      progress: 40,
      deadline: '2024-04-01',
      completed: false,
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 3,
      icon: 'fas fa-bullseye',
      title: 'Content Creation',
      description: 'Publish 12 high-quality articles this quarter',
      progress: 100,
      deadline: '2024-01-31',
      completed: true,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  insights = [
    {
      icon: 'fas fa-chart-line',
      title: 'Engagement Peak',
      description: 'Your content performs best when posted between 2-4 PM on weekdays',
      metric: '32% higher engagement',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: 'fas fa-users',
      title: 'Network Growth',
      description: 'You\'ve expanded your professional network by 15% this month',
      metric: '45 new connections',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: 'fas fa-award',
      title: 'Skill Development',
      description: 'You\'re in the top 20% of users for learning new skills this quarter',
      metric: '3 skills mastered',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  exportOptions = [
    {
      id: 'pdf',
      value: 'pdf',
      format: 'PDF Report',
      description: 'Best for printing and sharing',
      icon: 'fas fa-file-pdf'
    },
    {
      id: 'excel',
      value: 'excel',
      format: 'Excel Spreadsheet',
      description: 'Best for data analysis',
      icon: 'fas fa-file-excel'
    },
    {
      id: 'csv',
      value: 'csv',
      format: 'CSV File',
      description: 'Best for importing into other apps',
      icon: 'fas fa-file-csv'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  ngAfterViewInit(): void {
    this.initCharts();
  }

  loadDashboardData(): void {
    // Load data based on selected period
    // This would typically call a service to fetch data
    console.log('Loading data for period:', this.selectedPeriod);
  }

  initCharts(): void {
    this.createActivityChart();
    this.createPerformanceChart();
    this.createDistributionChart();
  }

  createActivityChart(): void {
    const ctx = document.getElementById('activityChart') as HTMLCanvasElement;
    this.activityChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Profile Views',
            data: [65, 78, 90, 81, 86, 55, 40],
            borderColor: '#4facfe',
            backgroundColor: 'rgba(79, 172, 254, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Likes',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: '#43e97b',
            backgroundColor: 'rgba(67, 233, 123, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Shares',
            data: [45, 25, 60, 32, 54, 72, 35],
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
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Performance Score',
            data: [75, 82, 78, 85, 90, 88],
            backgroundColor: 'rgba(79, 172, 254, 0.8)',
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
            max: 100,
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

  createDistributionChart(): void {
    const ctx = document.getElementById('distributionChart') as HTMLCanvasElement;
    this.distributionChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Social', 'Learning', 'Content', 'Networking'],
        datasets: [
          {
            data: [35, 25, 20, 20],
            backgroundColor: [
              '#4facfe',
              '#43e97b',
              '#fa709a',
              '#667eea'
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
        cutout: '70%'
      }
    });
  }

  onPeriodChange(): void {
    this.loadDashboardData();
    // Update charts with new data
    this.updateCharts();
  }

  updateCharts(): void {
    // Update chart data based on selected period
    // This would typically fetch new data and update the charts
    if (this.activityChart) {
      this.activityChart.update();
    }
    if (this.performanceChart) {
      this.performanceChart.update();
    }
    if (this.distributionChart) {
      this.distributionChart.update();
    }
  }

  exportData(): void {
    this.showExportModal = true;
  }

  closeExportModal(): void {
    this.showExportModal = false;
  }

  confirmExport(): void {
    // Implement export logic
    console.log('Exporting data...');
    this.closeExportModal();
    // Show success message
  }

  addNewTask(): void {
    this.router.navigate(['/user/tasks/new']);
  }

  generateReport(): void {
    this.exportData();
  }

  shareProgress(): void {
    // Implement share functionality
    console.log('Sharing progress...');
  }

  updateGoalProgress(goalId: number): void {
    const goal = this.goals.find(g => g.id === goalId);
    if (goal && !goal.completed) {
      goal.progress = Math.min(goal.progress + 25, 100);
      if (goal.progress === 100) {
        goal.completed = true;
      }
    }
  }

  // Utility function for template
  Math = Math;
}