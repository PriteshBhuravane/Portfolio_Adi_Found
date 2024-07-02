import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <div className="image-container">
          <img src={image} alt={imageAltText} />
        </div>
        <div className="projects-container">
          {projectList.map((project) => (
            <div className="project-box" key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <h3>{project.title}</h3>
              </a>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-section {
          padding: 3rem 1rem;
          text-align: center;
          background: linear-gradient(to bottom, #ffffff, #f0f0f0);
        }
        .portfolio-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        .image-container {
          padding-left: 2rem;
        }
        .image-container img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .image-container img:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .project-box {
          padding: 1.5rem;
          border: 1px solid #ddd;
          border-radius: 15px;
          background-color: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .project-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .project-link {
          text-decoration: none;
          color: inherit;
        }
        .project-link h3 {
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }
        .project-link:hover h3 {
          color: #0070f3;
        }
        .project-box p {
          margin: 0;
          color: #555;
          transition: color 0.3s ease;
        }
        .project-link:hover p {
          color: #0070f3;
        }
        @media (max-width: 768px) {
          .portfolio-container {
            grid-template-columns: 1fr;
          }
          .image-container {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
