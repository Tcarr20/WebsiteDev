import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

type Experience = {
  title: string;
  period: string;
  highlights: string[];
};

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly skillGroups = [
    { label: 'Languages', value: 'Python, Java, TypeScript, JavaScript, Gosu' },
    { label: 'Frontend', value: 'Angular, React, HTML, CSS' },
    { label: 'Backend', value: 'Node.js, Spring Boot, GraphQL APIs' },
    { label: 'Cloud & data', value: 'AWS Glue, S3, Apache Spark, ETL pipelines' },
    { label: 'Databases', value: 'PostgreSQL, SQL' },
    { label: 'Delivery', value: 'GitLab CI/CD, Terraform/Tofu, Vault, JFrog, Dynatrace' },
  ];

  protected readonly experience: Experience[] = [
    {
      title: 'Lead Software Engineer',
      period: 'State Farm · Feb 2023 — Present',
      highlights: [
        'Led a legacy IBM DB2-to-AWS Glue and Spark migration, navigating firewall and infrastructure constraints to deliver reliable automation.',
        'Built and maintained data pipelines between on-premises systems and cloud infrastructure.',
        'Created Streamlit tools that validated and corrected millions of records before migration, protecting data integrity at scale.',
        'Coordinated end-to-end testing across teams and partnered with stakeholders on realistic production timelines.',
      ],
    },
    {
      title: 'Full Stack Engineer',
      period: 'State Farm · May 2020 — Feb 2023',
      highlights: [
        'Contributed to a frontend redesign using React and GraphQL APIs.',
        'Built Spring Boot microservices supporting a broad system-modernization effort.',
        'Implemented GitLab CI/CD pipelines and improved batch-processing performance through multithreading.',
        'Mentored new engineers and helped teams ship reliable, maintainable software.',
      ],
    },
  ];
}
