import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      description: 'Visionary leader with 10+ years in tech industry. Passionate about innovation and team growth.',
      skills: ['Leadership', 'Strategy', 'Innovation'],
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Mike Chen',
      position: 'CTO',
      description: 'Tech enthusiast specializing in scalable architectures and cutting-edge technologies.',
      skills: ['Architecture', 'AI/ML', 'Cloud'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Lead Designer',
      description: 'Creative designer focused on user-centered design and beautiful interfaces.',
      skills: ['UI/UX', 'Figma', 'Prototyping'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'David Kim',
      position: 'Senior Developer',
      description: 'Full-stack developer passionate about clean code and performance optimization.',
      skills: ['Angular', 'Node.js', 'Database'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    }
  ];

  values = [
    {
      icon: 'fas fa-heart',
      title: 'Passion',
      description: 'We love what we do and bring enthusiasm to every project we undertake.',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to solve problems.',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency.',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we deliver.',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Partnership',
      description: 'We build long-term relationships based on trust and mutual success.',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize digital experiences'
    },
    {
      year: '2020',
      title: 'First 100 Clients',
      description: 'Reached milestone of serving 100+ satisfied clients'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew to 25+ talented professionals across departments'
    },
    {
      year: '2022',
      title: 'Award Recognition',
      description: 'Received "Best Digital Agency" award for innovative work'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded services to clients in 15+ countries worldwide'
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to innovate and shape the future of digital'
    }
  ];

  ngOnInit(): void {
    // Initialize any required logic
  }
}
