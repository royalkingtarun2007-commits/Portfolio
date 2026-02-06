export function loadProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  const projects = [
    // =====================
    // 1. CKW (PRIMARY)
    // =====================
    {
      title: "CKW — Backend Utility Platform",
      role: "Backend / Full-Stack",
      status: "Completed",
      description: `
        CKW is a backend-first utility platform designed to explore
        authentication, database integration, and API-driven system design.
        The project focuses on server-side logic and data flow, with the
        frontend used primarily to interact with and validate backend features.
      `,
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      highlights: [
        "User authentication and registration flow",
        "Database-backed user profiles",
        "API-based request and response handling",
        "Scalable backend-focused project structure"
      ],
      image: "assets/images/ckw_preview.png",
      repo: "https://github.com/royalkingtarun2007-commits/CKW"
    },

    // =====================
    // 2. Prompt2Site
    // =====================
    {
      title: "Prompt2Site — Prompt-Driven Site Generator",
      role: "Backend Logic / Tooling",
      status: "In Progress",
      description: `
        Prompt2Site is a logic-driven utility that converts structured prompts
        into website layouts and configuration data. The core focus of this
        project is on prompt interpretation, validation, and automated output
        generation rather than visual design.
      `,
      tech: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "Prompt Parsing",
        "System Design"
      ],
      highlights: [
        "Structured prompt interpretation and validation",
        "Logic-based content and layout generation",
        "Extensible system design for future features",
        "Backend-driven automation workflow"
      ],
      image: "assets/images/prompt2site_preview.png",
      repo: "https://github.com/royalkingtarun2007-commits/prompt2site"
    },

    // =====================
    // 3. Data Analytics
    // =====================
    {
      title: "Customer Churn Analytics Dashboard",
      role: "Data Analysis",
      status: "Completed",
      description: `
        A data analytics project focused on understanding customer churn
        behavior through data cleaning, analysis, and visualization. This
        project highlights the ability to work with structured datasets
        and extract insights that can inform backend and business decisions.
      `,
      tech: [
        "Python",
        "Pandas",
        "Data Analysis",
        "Data Visualization",
        "Power BI"
      ],
      highlights: [
        "Cleaned and standardized customer datasets",
        "Analyzed churn patterns by contract type and tenure",
        "Identified high-risk customer segments",
        "Presented insights using dashboards"
      ],
      image: "assets/images/churn_dashboard.png",
      repo: "https://github.com/royalkingtarun2007-commits/customer-intelligence-analytics"
    }
  ];

  container.innerHTML = projects
    .map(
      (p) => `
      <article class="project-block fade-in">
        <h3>${p.title}</h3>

        <span class="project-status ${
          p.status === "Completed" ? "completed" : "in-progress"
        }">
          ${p.status}
        </span>

        <p class="project-description">
          ${p.description}
        </p>

        <div class="project-content">
          <div class="project-image-wrapper">
            <img
              src="${p.image}"
              alt="${p.title}"
              class="project-image"
            />
          </div>

          <div class="project-meta">
            <p><strong>Role:</strong> ${p.role}</p>

            <div class="project-tech">
              <strong>Tech Stack</strong>
              <div class="tech-pills">
                ${p.tech.map(t => `<span>${t}</span>`).join("")}
              </div>
            </div>

            <ul class="project-highlights">
              ${p.highlights.map(h => `<li>${h}</li>`).join("")}
            </ul>

            <a
              class="btn btn-primary project-cta"
              href="${p.repo}"
              target="_blank"
              rel="noopener"
            >
              View Project →
            </a>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  // trigger fade-in animation
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("show");
  });
}
