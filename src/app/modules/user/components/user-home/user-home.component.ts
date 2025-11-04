import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit{
  userName = 'John Doe';
  userLevel = 12;
  achievementCount = 8;
  progress = 75;
  showQuickSettings = false;

  quickStats = [
    {
      icon: 'fas fa-chart-line',
      label: 'Points Earned',
      value: '1,250',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: 'fas fa-tasks',
      label: 'Tasks Completed',
      value: '24',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: 'fas fa-award',
      label: 'Current Streak',
      value: '7 days',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: 'fas fa-users',
      label: 'Connections',
      value: '156',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ];

  quickActions = [
    {
      icon: 'fas fa-user-edit',
      title: 'Update Profile',
      description: 'Complete your profile information',
      route: '/user/profile',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      notification: null
    },
    {
      icon: 'fas fa-cog',
      title: 'Settings',
      description: 'Manage your account preferences',
      route: '/user/settings',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      notification: null
    },
    {
      icon: 'fas fa-bell',
      title: 'Notifications',
      description: 'View your recent notifications',
      route: '/user/notifications',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      notification: '3'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security',
      description: 'Manage security settings',
      route: '/user/security',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      notification: null
    }
  ];

  recentActivities = [
    {
      icon: 'fas fa-user-plus',
      text: 'You connected with Sarah Johnson',
      time: '2 hours ago',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      badge: 'New',
      badgeClass: 'badge-success'
    },
    {
      icon: 'fas fa-trophy',
      text: 'Earned "Early Bird" achievement',
      time: '5 hours ago',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      badge: 'Achievement',
      badgeClass: 'badge-warning'
    },
    {
      icon: 'fas fa-task',
      text: 'Completed "Profile Setup" task',
      time: '1 day ago',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      badge: 'Completed',
      badgeClass: 'badge-info'
    },
    {
      icon: 'fas fa-bell',
      text: 'New feature available: Dark Mode',
      time: '2 days ago',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      badge: 'Update',
      badgeClass: 'badge-info'
    }
  ];

  notifications = [
    {
      id: 1,
      icon: 'fas fa-bell',
      message: 'Your subscription will renew in 7 days',
      time: '1 hour ago',
      read: false
    },
    {
      id: 2,
      icon: 'fas fa-gift',
      message: 'You have a new reward available to claim',
      time: '3 hours ago',
      read: false
    },
    {
      id: 3,
      icon: 'fas fa-users',
      message: '3 new members joined your community',
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      icon: 'fas fa-calendar',
      message: 'Upcoming event: Community Meetup tomorrow',
      time: '2 days ago',
      read: true
    }
  ];

  features = [
    {
      icon: 'fas fa-chart-bar',
      title: 'Advanced Analytics',
      description: 'Track your progress with detailed analytics and insights about your activities and performance.',
      link: '/user/analytics',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Achievement System',
      description: 'Earn badges and rewards as you complete tasks and reach milestones in your journey.',
      link: '/user/achievements',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: 'fas fa-users',
      title: 'Community',
      description: 'Connect with other users, join groups, and participate in community discussions.',
      link: '/user/community',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  upcomingEvents = [
    {
      id: 1,
      title: 'Web Development Workshop',
      description: 'Learn modern web development techniques with our expert instructors.',
      date: new Date('2024-02-15'),
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      rsvp: false
    },
    {
      id: 2,
      title: 'Community Q&A Session',
      description: 'Ask questions and get answers from our team and community experts.',
      date: new Date('2024-02-20'),
      time: '6:00 PM - 7:00 PM',
      location: 'Virtual Meeting',
      rsvp: true
    },
    {
      id: 3,
      title: 'Product Launch Webinar',
      description: 'Be the first to see our new features and updates.',
      date: new Date('2024-02-25'),
      time: '3:00 PM - 4:30 PM',
      location: 'Online',
      rsvp: false
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    // Load user data from service or localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const data = JSON.parse(userData);
      this.userName = data.name || 'User';
      this.userLevel = data.level || 1;
      this.achievementCount = data.achievements || 0;
      this.progress = data.profileCompletion || 0;
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  completeProfile(): void {
    this.router.navigate(['/user/profile/edit']);
  }

  dismissNotification(id: number): void {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
  }

  markAllAsRead(): void {
    this.notifications.forEach(notification => notification.read = true);
  }

  rsvpToEvent(eventId: number): void {
    const event = this.upcomingEvents.find(e => e.id === eventId);
    if (event) {
      event.rsvp = !event.rsvp;
      // Here you would typically call an API to update the RSVP status
    }
  }

  openHelpCenter(): void {
    window.open('/help', '_blank');
  }

  contactSupport(): void {
    this.router.navigate(['/user/support']);
  }

  openQuickSettings(): void {
    this.showQuickSettings = true;
  }

  closeQuickSettings(): void {
    this.showQuickSettings = false;
  }
}
