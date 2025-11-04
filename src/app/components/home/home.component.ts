import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 features = [
    {
      icon: 'fas fa-rocket',
      title: 'Lightning Fast',
      description: 'Blazing fast performance with optimized code and modern architecture.',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure & Safe',
      description: 'Enterprise-grade security to protect your data and applications.',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Perfect experience on all devices, from mobile to desktop.',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Easy to Customize',
      description: 'Flexible and modular design that adapts to your needs.',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Analytics Ready',
      description: 'Built-in analytics to track performance and user behavior.',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock support to help you whenever you need.',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  ngOnInit(): void {
    // Initialize any required logic
  }

  scrollToFeatures(): void {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToDemo(): void {
    const element = document.getElementById('demo');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
