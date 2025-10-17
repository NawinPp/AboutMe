import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  technicalSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'PHP',
    'Python',
    'C',
    'Java',
  ];

  frameworks = ['Angular', 'Laravel', 'React', 'Node.js', 'Spring Boot'];

  databases = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'];

  tools = ['GitLab', 'GitHub', 'Postman', 'Tailwind CSS', 'Figma', 'Bootstrap'];

  softSkills = [
    'Team Collaboration',
    'Problem Solving',
    'Adaptability',
    'Attention to Detail',
    'Time Management',
  ];
}
