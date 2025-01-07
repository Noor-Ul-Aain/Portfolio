import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  contactForm: any = {
    Name: '',
    Email: '',
    Message: ''
  }

  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100078508275209', icon: 'fab fa-facebook' },
    { name: 'Twitter', url: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ms-noor-ul-aain', icon: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/Noor-Ul-Aain', icon: 'fab fa-github' },
  ];
}
