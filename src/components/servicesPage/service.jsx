import "../../assets/style/services.css";

const services = [
  {
    title: "Web Development",
    description:
      "We create responsive and high-performance web applications using the latest technologies to ensure seamless user experience and long-term scalability.",
    tags: ["React", "Django", "Node.js"],
    features: [
      "Custom websites tailored to your brand",
      "Responsive design for all devices",
      "High performance and fast load times",
      "SEO-friendly architecture",
    ],
    technologies: ["React", "Next.js", "Django", "Node.js", "PostgreSQL"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <path d="M14.5 4l-5 16" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Our team develops intuitive and feature-rich mobile apps that help businesses engage users and grow digitally.",
    tags: ["Performance", "UX", "Cross-platform"],
    features: [
      "Native and cross-platform development",
      "Intuitive UI/UX design",
      "Offline-first capabilities",
      "Push notifications and real-time updates",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description:
      "We help companies migrate, manage, and optimize their systems in the cloud for better performance and cost efficiency.",
    tags: ["AWS", "Azure", "Google Cloud"],
    features: [
      "Cloud migration and strategy",
      "Infrastructure as Code (IaC)",
      "Auto-scaling and load balancing",
      "Cost optimization and monitoring",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description:
      "We implement advanced security measures to safeguard your digital assets and ensure compliance with industry standards.",
    tags: ["Security Audits", "Monitoring", "Protection"],
    features: [
      "Vulnerability assessment and penetration testing",
      "24/7 security monitoring",
      "Compliance and regulatory support",
      "Incident response planning",
    ],
    technologies: ["SIEM", "WAF", "SSL/TLS", "OAuth 2.0", "Zero Trust"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    description:
      "We analyze your needs and provide expert recommendations to improve efficiency, reduce costs, and choose the right technologies.",
    tags: ["Strategy", "Optimization", "Growth"],
    features: [
      "Technology roadmap planning",
      "Digital transformation strategy",
      "Vendor selection and management",
      "Process improvement analysis",
    ],
    technologies: ["Agile", "ITIL", "TOGAF", "Jira", "Confluence"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      </svg>
    ),
  },
  {
    title: "Automation Solutions",
    description:
      "We streamline repetitive processes using smart automation tools to save time and reduce human error.",
    tags: ["Workflow", "API Integrations", "Process Optimization"],
    features: [
      "Workflow automation and orchestration",
      "API integrations across platforms",
      "Custom scripts and bots",
      "Data pipeline automation",
    ],
    technologies: ["Zapier", "N8n", "Browserless", "Vercel", "API"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.08z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, challenges, and requirements to understand the full picture.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We design a clear roadmap with milestones, timelines, and the right technology stack.",
  },
  {
    step: "03",
    title: "Development",
    description: "Our engineers build your solution iteratively with regular check-ins and transparency.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Rigorous QA and testing to ensure reliability, performance, and security before launch.",
  },
  {
    step: "05",
    title: "Deployment",
    description: "Smooth rollout with monitoring, documentation, and ongoing support to keep things running.",
  },
];

const benefits = [
  {
    title: "Experienced Team",
    description: "Senior engineers with deep expertise across multiple industries and technologies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Scalable Solutions",
    description: "Architecture designed to grow with your business, from startup to enterprise scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Agile workflows and efficient processes to deliver results on time, every time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Secure Systems",
    description: "Security-first approach with best practices baked into every layer of development.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description: "We don't disappear after launch. Continuous maintenance, updates, and support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Vue.js", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Django", "Node.js", "Express", "FastAPI", "GraphQL"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
];

const caseStudies = [
  {
    title: "E-Commerce Platform Redesign",
    problem: "A retail client struggled with a slow, outdated e-commerce site causing high bounce rates and lost sales.",
    solution: "We rebuilt the platform with React and Node.js, implemented a headless CMS, and optimized for mobile-first.",
    outcome: "60% faster load times, 35% increase in conversions, and a seamless mobile shopping experience.",
    tags: ["Web Development", "Cloud Solutions"],
  },
  {
    title: "Healthcare Data Pipeline",
    problem: "A healthcare provider needed to securely process and analyze millions of patient records in real time.",
    solution: "We designed a HIPAA-compliant cloud architecture on AWS with automated ETL pipelines and real-time dashboards.",
    outcome: "90% reduction in data processing time with full regulatory compliance and zero downtime.",
    tags: ["Cloud Solutions", "Automation"],
  },
  {
    title: "FinTech Mobile App",
    problem: "A fintech startup needed a cross-platform mobile app with real-time transaction tracking and bank-grade security.",
    solution: "Built with React Native, integrated biometric auth, end-to-end encryption, and real-time push notifications.",
    outcome: "50K+ downloads in the first month, 4.8-star rating, and zero security incidents post-launch.",
    tags: ["Mobile App", "Cybersecurity"],
  },
];

function Services() {
  return (
    <section id="services">
      {/* <div className="hero__bg"></div> */}
      <div className="hero__noise"></div>

      {/* Services Overview */}
      <div id="services-overview" className="serviceContainer">
        <div className="subServiceContainer">
          <div className="serviceTitleContainer">
            <p>Our Services</p>
          </div>
          <div className="serviceDescription">
            <p>
              We provide end-to-end IT solutions to help businesses grow and
              scale.
            </p>
          </div>
        </div>

        <div className="cardContainer">
          {services.map((service, index) => (
            <div className="subCardContainer" key={index}>
              <div className="iconContainer">
                <div className="subIconContainer">{service.icon}</div>
              </div>
              <div className="cardContent">
                <h3 className="cardTitle">{service.title}</h3>
                <p className="cardDescription">{service.description}</p>
              </div>
              <div className="cardTags">
                {service.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Service Sections */}
      <div id="what-we-offer" className="detailedServicesContainer">
        <div className="sectionHeader">
          <p className="sectionTitle">What We Offer</p>
          <p className="sectionSubtitle">
            A closer look at each service and how we deliver value.
          </p>
        </div>

        <div className="detailedServicesList">
          {services.map((service, index) => (
            <div
              className={`detailedServiceItem ${index % 2 !== 0 ? "detailedServiceItem--reverse" : ""}`}
              key={index}
            >
              <div className="detailedServiceContent">
                <div className="detailedServiceIcon">
                  <div className="subIconContainer">{service.icon}</div>
                </div>
                <h3 className="detailedServiceTitle">{service.title}</h3>
                <p className="detailedServiceDesc">{service.description}</p>

                <div className="detailedServiceFeatures">
                  <h4 className="featuresHeading">Key Features</h4>
                  <ul className="featuresList">
                    {service.features.map((feature, i) => (
                      <li className="featureItem" key={i}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="featureCheck">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detailedServiceTech">
                  <h4 className="featuresHeading">Technologies</h4>
                  <div className="techPills">
                    {service.technologies.map((tech, i) => (
                      <span className="techPill" key={i}>{tech}</span>
                    ))}
                  </div>
                </div>

                <button className="learnMoreBtn">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="learnMoreArrow">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How We Work */}
      <div id="how-we-work" className="processContainer">
        <div className="sectionHeader">
          <p className="sectionTitle">How We Work</p>
          <p className="sectionSubtitle">
            Our proven process ensures quality results from start to finish.
          </p>
        </div>

        <div className="processTimeline">
          {processSteps.map((step, index) => (
            <div className="processStep" key={index}>
              <div className="processStepNumber">{step.step}</div>
              <div className="processStepLine">
                <div className="processStepDot"></div>
                {index < processSteps.length - 1 && <div className="processStepConnector"></div>}
              </div>
              <div className="processStepContent">
                <h3 className="processStepTitle">{step.title}</h3>
                <p className="processStepDesc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div id="why-choose-us" className="benefitsContainer">
        <div className="sectionHeader">
          <p className="sectionTitle">Why Choose Us</p>
          <p className="sectionSubtitle">
            We deliver more than code. We deliver confidence.
          </p>
        </div>

        <div className="benefitsGrid">
          {benefits.map((benefit, index) => (
            <div className="benefitCard" key={index}>
              <div className="benefitIcon">
                {benefit.icon}
              </div>
              <h3 className="benefitTitle">{benefit.title}</h3>
              <p className="benefitDesc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies We Use */}
      <div id="technologies" className="techStackContainer">
        <div className="sectionHeader">
          <p className="sectionTitle">Technologies We Use</p>
          <p className="sectionSubtitle">
            Modern tools and frameworks powering our solutions.
          </p>
        </div>

        <div className="techStackGrid">
          {techStack.map((category, index) => (
            <div className="techStackCategory" key={index}>
              <h3 className="techStackCategoryTitle">{category.category}</h3>
              <div className="techStackItems">
                {category.items.map((item, i) => (
                  <div className="techStackItem" key={i}>
                    <span className="techStackDot"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div id="case-studies" className="caseStudiesContainer">
        <div className="sectionHeader">
          <p className="sectionTitle">Case Studies</p>
          <p className="sectionSubtitle">
            Real projects. Real results. See how we solve problems.
          </p>
        </div>

        <div className="caseStudiesGrid">
          {caseStudies.map((study, index) => (
            <div className="caseStudyCard" key={index}>
              <div className="caseStudyNumber">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="caseStudyTitle">{study.title}</h3>

              <div className="caseStudySection">
                <span className="caseStudyLabel">Problem</span>
                <p className="caseStudyText">{study.problem}</p>
              </div>

              <div className="caseStudySection">
                <span className="caseStudyLabel">Solution</span>
                <p className="caseStudyText">{study.solution}</p>
              </div>

              <div className="caseStudySection">
                <span className="caseStudyLabel caseStudyLabel--outcome">Outcome</span>
                <p className="caseStudyText">{study.outcome}</p>
              </div>

              <div className="caseStudyTags">
                {study.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
