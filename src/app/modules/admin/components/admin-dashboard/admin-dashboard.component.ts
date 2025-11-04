import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit, AfterViewInit{
selectedRange = '30d';
  revenueMetric = 'revenue';
  performanceView = 'system';
  showExportModal = false;
  showUpdateModal = false;
  exportRange = '30d';

  // Chart instances
  revenueChart: any;
  acquisitionChart: any;
  geoChart: any;

  realTimeStats = {
    activeUsers: 245,
    orders: 12,
    responseTime: 124,
    serverLoad: 42
  };

  kpiMetrics = [
    {
      id: 1,
      icon: 'fas fa-dollar-sign',
      title: 'Total Revenue',
      value: '$45.2K',
      trend: 12.5,
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      highlight: true
    },
    {
      id: 2,
      icon: 'fas fa-shopping-cart',
      title: 'Total Orders',
      value: '3,245',
      trend: 8.2,
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      highlight: false
    },
    {
      id: 3,
      icon: 'fas fa-users',
      title: 'New Users',
      value: '1,248',
      trend: 15.7,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      highlight: false
    },
    {
      id: 4,
      icon: 'fas fa-chart-line',
      title: 'Conversion Rate',
      value: '4.2%',
      trend: -3.1,
      color: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      highlight: false
    }
  ];

  systemHealth = {
    score: 94,
    metrics: [
      { label: 'CPU Usage', value: 68 },
      { label: 'Memory', value: 82 },
      { label: 'Disk Space', value: 45 },
      { label: 'Network', value: 92 }
    ]
  };

  quickAlerts = [
    {
      level: 'critical',
      icon: 'fas fa-database',
      message: 'Database backup failed',
      time: '2 hours ago'
    },
    {
      level: 'warning',
      icon: 'fas fa-server',
      message: 'High memory usage on server-02',
      time: '5 hours ago'
    },
    {
      level: 'info',
      icon: 'fas fa-certificate',
      message: 'SSL certificate renewal required',
      time: '1 day ago'
    }
  ];

  acquisitionLegend = [
    { label: 'Organic Search', color: '#667eea' },
    { label: 'Direct Traffic', color: '#fa709a' },
    { label: 'Social Media', color: '#43e97b' },
    { label: 'Email Campaign', color: '#ff6b6b' }
  ];

  recentTransactions = [
    {
      user: 'John Smith',
      email: 'john.smith@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      amount: '$249.99',
      status: 'completed',
      date: '2024-01-15'
    },
    {
      user: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      amount: '$99.50',
      status: 'pending',
      date: '2024-01-15'
    },
    {
      user: 'Mike Chen',
      email: 'mike.chen@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      amount: '$449.00',
      status: 'completed',
      date: '2024-01-14'
    },
    {
      user: 'Emily Davis',
      email: 'emily.davis@example.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      amount: '$199.99',
      status: 'failed',
      date: '2024-01-14'
    }
  ];

  performanceMetrics = [
    { name: 'API Response Time', value: '124ms', percentage: 88, trend: 'up' },
    { name: 'Page Load Time', value: '1.2s', percentage: 92, trend: 'up' },
    { name: 'Database Queries', value: '245/s', percentage: 76, trend: 'down' },
    { name: 'Cache Hit Rate', value: '94%', percentage: 94, trend: 'up' }
  ];

  systemMonitors = [
    {
      id: 1,
      icon: 'fas fa-server',
      title: 'Web Servers',
      description: 'Load-balanced web server cluster',
      status: 'healthy',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      stats: [
        { value: '95%', label: 'Uptime' },
        { value: '68%', label: 'Load' }
      ]
    },
    {
      id: 2,
      icon: 'fas fa-database',
      title: 'Database Cluster',
      description: 'Primary and replica databases',
      status: 'warning',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      stats: [
        { value: '82%', label: 'Storage' },
        { value: '245', label: 'Queries/s' }
      ]
    },
    {
      id: 3,
      icon: 'fas fa-cloud',
      title: 'CDN Network',
      description: 'Content delivery network',
      status: 'healthy',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      stats: [
        { value: '99.9%', label: 'Availability' },
        { value: '1.2GB', label: 'Traffic' }
      ]
    },
    {
      id: 4,
      icon: 'fas fa-shield-alt',
      title: 'Security Services',
      description: 'Firewall and threat protection',
      status: 'critical',
      color: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      stats: [
        { value: '3', label: 'Threats' },
        { value: '100%', label: 'Protected' }
      ]
    }
  ];

  aiInsights = [
    {
      id: 1,
      icon: 'fas fa-rocket',
      title: 'Performance Optimization',
      description: 'Database queries can be optimized to reduce response time by 40%',
      action: 'Optimize Now',
      priority: 'high'
    },
    {
      id: 2,
      icon: 'fas fa-users',
      title: 'User Engagement',
      description: 'Consider implementing push notifications to increase user retention',
      action: 'Learn More',
      priority: 'medium'
    },
    {
      id: 3,
      icon: 'fas fa-chart-line',
      title: 'Revenue Growth',
      description: 'Premium feature adoption increased by 25% this month',
      action: 'View Report',
      priority: 'low'
    }
  ];

  exportOptions = [
    {
      id: 'pdf',
      value: 'pdf',
      format: 'PDF Report',
      description: 'Best for printing and sharing',
      icon: 'fas fa-file-pdf',
      default: true
    },
    {
      id: 'excel',
      value: 'excel',
      format: 'Excel Spreadsheet',
      description: 'Best for data analysis',
      icon: 'fas fa-file-excel',
      default: false
    },
    {
      id: 'csv',
      value: 'csv',
      format: 'CSV File',
      description: 'Best for importing into other apps',
      icon: 'fas fa-file-csv',
      default: false
    }
  ];

  exportIncludes = [
    { label: 'Revenue Data', checked: true },
    { label: 'User Analytics', checked: true },
    { label: 'System Metrics', checked: false },
    { label: 'Transaction Logs', checked: false }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadDashboardData();
    this.startRealTimeUpdates();
  }

  ngAfterViewInit(): void {
    this.initCharts();
    this.initSparklines();
  }

  loadDashboardData(): void {
    // Load dashboard data based on selected range
    console.log('Loading data for range:', this.selectedRange);
  }

  startRealTimeUpdates(): void {
    // Simulate real-time data updates
    setInterval(() => {
      this.updateRealTimeStats();
    }, 5000);
  }

  updateRealTimeStats(): void {
    this.realTimeStats = {
      activeUsers: Math.floor(Math.random() * 100) + 200,
      orders: Math.floor(Math.random() * 5) + 10,
      responseTime: Math.floor(Math.random() * 50) + 100,
      serverLoad: Math.floor(Math.random() * 30) + 40
    };
  }

  initCharts(): void {
    this.createRevenueChart();
    this.createAcquisitionChart();
    this.createGeoChart();
  }

  initSparklines(): void {
    // Initialize sparkline charts for KPI cards
    this.kpiMetrics.forEach(kpi => {
      this.createSparklineChart(kpi.id);
    });
  }

  createRevenueChart(): void {
    const ctx = document.getElementById('revenueChart') as HTMLCanvasElement;
    this.revenueChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 32000, 30000, 35000, 38000, 42000],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Orders',
            data: [800, 1200, 1000, 1800, 1500, 2200, 2000, 2400, 2200, 2600, 2800, 3200],
            borderColor: '#43e97b',
            backgroundColor: 'rgba(67, 233, 123, 0.1)',
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

  createAcquisitionChart(): void {
    const ctx = document.getElementById('acquisitionChart') as HTMLCanvasElement;
    this.acquisitionChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Organic', 'Direct', 'Social', 'Email', 'Referral', 'Paid'],
        datasets: [
          {
            label: 'User Acquisition',
            data: [4500, 3200, 2800, 2100, 1800, 1500],
            backgroundColor: [
              '#667eea',
              '#fa709a',
              '#43e97b',
              '#ff6b6b',
              '#f093fb',
              '#4facfe'
            ],
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

  createGeoChart(): void {
    const ctx = document.getElementById('geoChart') as HTMLCanvasElement;
    this.geoChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'],
        datasets: [
          {
            data: [35, 28, 20, 10, 5, 2],
            backgroundColor: [
              '#667eea',
              '#fa709a',
              '#43e97b',
              '#ff6b6b',
              '#f093fb',
              '#4facfe'
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
        cutout: '60%'
      }
    });
  }

  createSparklineChart(id: number): void {
    const ctx = document.getElementById('sparkline-' + id) as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['', '', '', '', '', '', ''],
          datasets: [{
            data: [30, 45, 35, 50, 40, 60, 55],
            borderColor: '#667eea',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
            pointRadius: 0
          }]
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
            x: { display: false },
            y: { display: false }
          }
        }
      });
    }
  }

  onRangeChange(): void {
    this.loadDashboardData();
    this.updateCharts();
  }

  updateRevenueChart(): void {
    if (this.revenueChart) {
      this.revenueChart.update();
    }
  }

  updateCharts(): void {
    if (this.revenueChart) this.revenueChart.update();
    if (this.acquisitionChart) this.acquisitionChart.update();
    if (this.geoChart) this.geoChart.update();
  }

  refreshDashboard(): void {
    this.loadDashboardData();
    this.updateCharts();
    // Show refresh indicator
    console.log('Dashboard data refreshed');
  }

  exportDashboard(): void {
    this.showExportModal = true;
  }

  closeExportModal(): void {
    this.showExportModal = false;
  }

  confirmExport(): void {
    console.log('Exporting dashboard data...');
    this.closeExportModal();
    // Show export success message
  }

  getHealthScoreClass(): string {
    if (this.systemHealth.score >= 90) return 'excellent';
    if (this.systemHealth.score >= 75) return 'good';
    return 'warning';
  }

  getBarClass(value: number): string {
    if (value >= 80) return 'critical';
    if (value >= 60) return 'warning';
    return 'good';
  }

  getPerformanceClass(value: number): string {
    if (value >= 90) return 'good';
    if (value >= 70) return 'warning';
    return 'critical';
  }

  handleMonitorAction(monitorId: number): void {
    console.log('Handling monitor action:', monitorId);
    // Implement monitor-specific actions
  }

  applyInsight(insightId: number): void {
    console.log('Applying insight:', insightId);
    // Implement insight application logic
  }

  dismissInsight(insightId: number): void {
    this.aiInsights = this.aiInsights.filter(insight => insight.id !== insightId);
  }

  // Quick Actions
  runBackup(): void {
    console.log('Starting database backup...');
    // Implement backup logic
  }

  clearCache(): void {
    console.log('Clearing system cache...');
    // Implement cache clearing logic
  }

  runSecurityScan(): void {
    console.log('Running security scan...');
    // Implement security scan logic
  }

  generateReports(): void {
    this.exportDashboard();
  }

  systemUpdate(): void {
    this.showUpdateModal = true;
  }

  userManagement(): void {
    this.router.navigate(['/admin/users']);
  }

  closeUpdateModal(): void {
    this.showUpdateModal = false;
  }

  startUpdate(): void {
    console.log('Starting system update...');
    this.closeUpdateModal();
    // Implement update logic
  }

  // Utility function for template
  Math = Math;
}
