export function loadProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const projects = [
    {
      title: 'Customer Churn Analytics Dashboard',
      status: 'completed',
      description:
        'An end-to-end data analytics project focused on understanding customer churn behavior and extracting actionable business insights from structured datasets.',
      tech: [
        'Python',
        'Pandas',
        'Power BI',
        'Data Analysis',
        'Data Visualization'
      ],
      highlights: [
        'Cleaned and standardized raw customer data',
        'Analyzed churn patterns by tenure and contract type',
        'Identified high-risk customer segments',
        'Presented insights using dashboards'
      ],
      image: 'assets/images/churn_dashboard.png',
      imageAlt: 'Customer churn analytics dashboard with charts and KPIs',
      repo: 'https://github.com/royalkingtarun2007-commits/customer-intelligence-analytics'
    },
    {
      title: 'CKW - Full-Stack Utility Platform',
      status: 'in-progress',
      description:
        'A full-stack utility platform featuring user authentication, profile management, and a scalable backend architecture. Designed as a foundation for future user-centric utilities.',
      tech: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'Python',
        'MongoDB'
      ],
      highlights: [
        'User authentication and registration system',
        'Secure profile and session management',
        'Backend API integration with database',
        'Scalable architecture for future utility features'
      ],
      image: 'assets/images/ckw_preview.png',
      imageAlt: 'CKW utility platform login and registration interface',
      repo: 'https://github.com/royalkingtarun2007-commits/CKW'
    }
  ];

  container.innerHTML = projects
    .map(
      (p) => `
      <article class="project-block fade-in">
        <h3>${p.title}</h3>
        <span class="project-status ${p.status}">
          ${p.status === 'completed' ? 'Completed' : 'In Progress'}
        </span>

        <p class="project-description">
          ${p.description}
        </p>

        <div class="project-content">
          <div class="project-image-wrapper">
            <img
              src="${p.image}"
              alt="${p.imageAlt}"
              class="project-image"
              loading="lazy"
            />
          </div>

          <div class="project-meta">
            <div class="project-tech">
              <strong>Tech Stack</strong>
              <div class="tech-pills">
                ${p.tech.map(t => `<span>${t}</span>`).join('')}
              </div>
            </div>

            <ul class="project-highlights">
              ${p.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>

            <a
              class="btn btn-primary project-cta"
              href="${p.repo}"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>
      </article>
      `
    )
    .join('');

  // trigger fade-in after DOM paint
  requestAnimationFrame(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('show');
    });
  });
}
