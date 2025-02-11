// Initialize Lucide icons
lucide.createIcons();

// Define sections data
const sections = [
  {
    title: 'AI & Emerging Technologies',
    subtitle:
      'Leveraging AI to enhance business solutions and drive innovation in SaaS.',
    projects: [
      {
        title: 'AI Conversational Agents for HR SaaS',
        description:
          'Developed AI-driven chatbots using NLP and neural networks to improve employee feedback and engagement.',
        link: 'https://www.linkedin.com/in/mariolinge/',
        background:
          'https://images.unsplash.com/photo-1581092334639-03b3f284a56a?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'AI Strategy & Prototyping for Startups',
        description:
          'Advised startups on AI implementation, building LLM-powered automation and analytics tools.',
        link: 'https://www.linkedin.com/in/mariolinge/',
        background:
          'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    title: 'Leadership & Team Growth',
    subtitle:
      'Scaling high-performing teams and aligning technical execution with business goals.',
    projects: [
      {
        title: 'Scaling a High-Performing Engineering Team at Flashbrand',
        description:
          'Grew and led a team that increased efficiency and customer retention by 20%.',
        link: 'https://www.linkedin.com/in/mariolinge/',
        background:
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Driving IT & DevOps Strategy at NEOBRAIN',
        description:
          'Directed a DevOps team, optimizing SaaS infrastructure for rapid business growth.',
        link: 'https://www.linkedin.com/in/mariolinge/',
        background:
          'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    title: 'SaaS & Scalable System Design',
    subtitle:
      'Building robust, enterprise-grade platforms with security, scalability, and efficiency.',
    projects: [
      {
        title: 'HR SaaS Platform for Fortune 500 Companies',
        description:
          'Co-founded and scaled Flashbrand to 250,000+ users, reducing operational costs by 30% and increasing revenue by 200%. Successfully exited by selling the company to NEOBRAIN in 2023',
        link: 'https://www.prnewswire.com/news-releases/neobrain-acquires-san-francisco-based-hr-performance-company-flashbrand-to-strengthen-its-ai-powered-talent-management-solution-and-establish-itself-in-the-us-301843248.html?utm_source=chatgpt.com',
        background:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Scalable CI/CD & Real-time Analytics',
        description:
          'Designed cloud-based architecture with automated CI/CD and real-time monitoring, boosting system reliability by 25%.',
        link: 'https://www.linkedin.com/in/mariolinge/',
        background:
          'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    title: 'Mobile Innovation',
    subtitle:
      'Enhancing user experiences through mobile-first and cross-platform solutions.',
    projects: [
      {
        title: 'First iPad CRM SaaS Application at SAP',
        description:
          'Led the development of SAP’s first iPad CRM, improving adoption and performance.',
        link: 'https://apps.apple.com/us/app/sap-cloud-for-customer/id985812159?platform=ipad',
        background:
          'https://images.unsplash.com/photo-1520962912085-2b56b48b0263?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Mobile & Progressive Web Applications',
        description:
          'Built advanced iOS and PWA solutions, driving engagement and seamless cross-platform experiences.',
        link: 'https://www.linkedin.com/in/mariolinge/',
        background:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    title: ' Wearable Innovation',
    subtitle:
      'Experimenting with newest wearable technologies.',
    projects: [
      {
        title: 'First SAP Apple Watch App',
        description:
          'The Red Dot Award-winning project "SAP Perfect Meeting with Customer" is a smartwatch application that provides sales representatives with timely and relevant customer information during meetings.',
        link: 'https://www.red-dot.org/project/sap-perfect-meeting-with-customer-14930',
        background:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },

 

];
// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  // Render sections
  const sectionsContainer = document.getElementById('sections-container');
  if (sectionsContainer) {
    sections.forEach((section) => {
      const sectionElement = document.createElement('div');
      sectionElement.className = 'section';
      sectionElement.innerHTML = `
        <div class="section-content">
          <h2 class="section-title">${section.title}</h2>
          <p class="section-subtitle">${section.subtitle}</p>
          <div class="projects-grid">
            ${section.projects
              .map(
                (project) => `
              <div class="project-card project-card-color-${sections.indexOf(
                section
              )}">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="${
                  project.link
                }" class="project-link" target="_blank" rel="noopener noreferrer">
                  View Project <i data-lucide="external-link" style="width: 16px; height: 16px; margin-left: 8px;"></i>
                </a>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `;
      sectionsContainer.appendChild(sectionElement);
    });

    // Observe sections
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('slide-up');
              }, index * 10);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    document.querySelectorAll('.section').forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // Initialize Lucide icons again for dynamically added content
  lucide.createIcons();
});
