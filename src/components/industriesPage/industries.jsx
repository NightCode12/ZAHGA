import { Link } from "react-router-dom";
import "../../assets/style/industries.css";

const solutions = [
  {
    title: "Custom Software Development",
    description: "Bespoke applications designed to fit your unique business processes and goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: "Cloud Integration",
    description: "Seamless migration and integration with leading cloud platforms for scalability and reliability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: "Automation",
    description: "Streamline repetitive workflows and reduce manual effort with intelligent automation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.08z" />
      </svg>
    ),
  },
  {
    title: "Data Analytics",
    description: "Turn raw data into actionable insights with dashboards, reporting, and predictive models.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Security Solutions",
    description: "Protect your business with robust security frameworks, audits, and compliance tooling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const expertiseReasons = [
  {
    title: "Tailored Solutions",
    description: "Every industry has unique challenges. We craft solutions that address your specific pain points.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Compliance Knowledge",
    description: "We understand the regulatory landscape of your industry and build compliance into every solution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Faster Implementation",
    description: "Domain expertise means less ramp-up time and faster delivery of production-ready solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Better ROI",
    description: "Industry-specific solutions deliver measurable results that directly impact your bottom line.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const caseStudies = [
  {
    industry: "Logistics",
    title: "Automated Tracking System",
    challenge: "A logistics company struggled with manual tracking processes, leading to frequent delivery delays and customer complaints.",
    outcome: "We helped automate their tracking system, reducing delivery delays by 40% and improving customer satisfaction scores by 55%.",
    tags: ["Automation", "Real-time Tracking", "Process Optimization"],
  },
  {
    industry: "Healthcare",
    title: "Patient Management Platform",
    challenge: "A healthcare provider needed to modernize their patient management system while maintaining strict HIPAA compliance.",
    outcome: "Delivered a cloud-based platform that reduced administrative overhead by 35% and improved patient data accessibility across departments.",
    tags: ["Cloud Migration", "HIPAA Compliance", "EHR Integration"],
  },
  {
    industry: "FinTech",
    title: "Fraud Detection Engine",
    challenge: "A fintech startup needed real-time fraud detection to scale their payment processing without compromising security.",
    outcome: "Built an ML-powered fraud detection engine that reduced fraudulent transactions by 60% while maintaining sub-second response times.",
    tags: ["Machine Learning", "Security", "Real-time Processing"],
  },
];

const industries = [
  {
    title: "Healthcare",
    description:
      "We help healthcare providers improve patient care, streamline operations, and ensure data security through advanced technology.",
    tags: ["Electronic Health Records (EHR) systems", "Telemedicine platforms", "Patient management systems", "Data security & compliance"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <path d="M14.5 4l-5 16" />
      </svg>
    ),
  },
  {
    title: "Finance / FinTech",
    description:
      "We build robust fintech applications that ensure secure transactions, compliance, and seamless user experience.",
    tags: ["Financial analytics dashboards", "Fraud detection systems", "Banking systems", "Payment gateways"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    title: "E-commerce",
    description:
      "We create scalable e-commerce solutions that enhance customer experience and boost sales.",
    tags: ["Performance optimization", "Inventory management", "Payment integration", "Online store development"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: "Education",
    description:
      "We develop digital platforms that enhance learning experiences for students and educators.",
    tags: ["Content management systems", "Student portals", "Virtual classrooms", "Learning Management Systems (LMS)"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Logistics",
    description:
      "We help logistics companies improve efficiency, tracking, and automation across their operations.",
    tags: ["Process automation", "Warehouse management", "Real-time tracking", "Fleet management systems"],
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.08z" />
      </svg>
    ),
  },
];

function Industries() {
  return (
    <>
      {/* Industries We Serve */}
      <section id="industries-we-serve">
        {/* <div className="hero__bg"></div> */}
        <div className="hero__noise"></div>
        <div className="industriesContainer">
          <div className="subindustriesContainer">
            <div className="industriesTitleContainer">
              <p>Industries We Serve</p>
            </div>
            <div className="industriesDescription">
              <p>
                We deliver tailored technology solutions across multiple industries, helping businesses innovate, scale, and stay competitive.
              </p>
            </div>
          </div>

          <div className="cardContainer">
            {industries.map((item, index) => (
              <div className="subCardContainer" key={index}>
                <div className="iconContainer">
                  <div className="subIconContainer">{item.icon}</div>
                </div>
                <div className="cardContent">
                  <h3 className="cardTitle">{item.title}</h3>
                  <p className="cardDescription">{item.description}</p>
                </div>
                <div className="cardTags">
                  {item.tags.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Across Industries */}
      <section id="solutions" className="solutionsSection">
        <div className="solutionsContainer">
          <div className="sectionHeader">
            <h2 className="indSectionTitle">Solutions Across Industries</h2>
            <p className="indSectionSubtitle">
              No matter your industry, we bring a comprehensive suite of services to drive your digital transformation.
            </p>
          </div>
          <div className="solutionsGrid">
            {solutions.map((solution, index) => (
              <div className="solutionCard" key={index}>
                <div className="solutionIcon">{solution.icon}</div>
                <h3 className="solutionTitle">{solution.title}</h3>
                <p className="solutionDesc">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section id="expertise" className="expertiseSection">
        <div className="expertiseContainer">
          <div className="sectionHeader">
            <h2 className="indSectionTitle">Why Industry Expertise Matters</h2>
            <p className="indSectionSubtitle">
              Deep domain knowledge translates directly into better outcomes for your business.
            </p>
          </div>
          <div className="expertiseGrid">
            {expertiseReasons.map((reason, index) => (
              <div className="expertiseCard" key={index}>
                <div className="expertiseIcon">{reason.icon}</div>
                <h3 className="expertiseCardTitle">{reason.title}</h3>
                <p className="expertiseCardDesc">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="industry-case-studies" className="caseStudiesSection">
        <div className="indCaseStudiesContainer">
          <div className="sectionHeader">
            <h2 className="indSectionTitle">Case Studies</h2>
            <p className="indSectionSubtitle">
              Real results from real partnerships. See how we've helped businesses transform.
            </p>
          </div>
          <div className="indCaseStudiesGrid">
            {caseStudies.map((study, index) => (
              <div className="indCaseStudyCard" key={index}>
                <span className="indCaseStudyBadge">{study.industry}</span>
                <h3 className="indCaseStudyTitle">{study.title}</h3>
                <div className="indCaseStudySection">
                  <span className="indCaseStudyLabel">Challenge</span>
                  <p className="indCaseStudyText">{study.challenge}</p>
                </div>
                <div className="indCaseStudySection">
                  <span className="indCaseStudyLabel indCaseStudyLabel--outcome">Outcome</span>
                  <p className="indCaseStudyText">{study.outcome}</p>
                </div>
                <div className="indCaseStudyTags">
                  {study.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="ctaContainer">
            <Link to="/contact" className="indCtaButton">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Industries;
