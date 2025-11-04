import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
contactForm: FormGroup;
  isSubmitting = false;
  
  contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'hello@yourbrand.com',
      link: 'mailto:hello@yourbrand.com'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: '123 Business Ave, City, State 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: 'fas fa-comments',
      title: 'Live Chat',
      description: 'Instant support available',
      value: 'Start Chat',
      link: '#chat'
    }
  ];

  offices = [
    {
      city: 'New York',
      address: '123 Business Avenue, Suite 100<br>New York, NY 10001',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      mapLink: 'https://maps.google.com/?q=New+York+NY'
    },
    {
      city: 'San Francisco',
      address: '456 Tech Street, Floor 15<br>San Francisco, CA 94102',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM PST',
      mapLink: 'https://maps.google.com/?q=San+Francisco+CA'
    },
    {
      city: 'London',
      address: '789 Innovation Road<br>London, UK EC1A 1BB',
      hours: 'Mon-Fri: 9:00 AM - 5:30 PM GMT',
      mapLink: 'https://maps.google.com/?q=London+UK'
    }
  ];

  businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
    { day: 'Emergency Support', time: '24/7 Available' }
  ];

  faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, we have 24/7 emergency support available.',
      open: false
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
      open: false
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your digital products remain secure, updated, and performing optimally.',
      open: false
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across various industries including healthcare, finance, e-commerce, education, and SaaS. Our team adapts to your specific industry requirements.',
      open: false
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We often collaborate with in-house teams, providing specialized expertise where needed while integrating seamlessly with your existing workflows.',
      open: false
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing models including fixed-price projects, time-and-materials, and dedicated team arrangements. We tailor our pricing to match your project needs and budget.',
      open: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    // Initialize any required logic
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        
        // Show success message (you can implement a toast notification here)
        alert('Thank you for your message! We will get back to you within 24 hours.');
        this.contactForm.reset();
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
