import { Link } from "react-router-dom";
import "../../assets/style/company.css";

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "45+", label: "Happy Clients" },
  { value: "30+", label: "Team Members" },
];

const values = [
  {
    title: "Client-First",
    description:
      "Everything we build begins with a deep understanding of your business, goals, and users.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Craftsmanship",
    description:
      "We take pride in clean architecture, thoughtful design, and code that stands the test of time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "Honest communication, clear timelines, and no surprises — from day one to launch and beyond.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "Tech evolves fast. So do we. Our team continually sharpens skills to deliver modern solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const teams = [
  {
    name: "Engineering",
    description: "Backend, frontend, mobile, and DevOps engineers shipping reliable software every sprint.",
    members: "5 engineers",
  },
  {
    name: "Design",
    description: "Product designers and UX researchers turning complex problems into simple interfaces.",
    members: "2 designers",
  },
  {
    name: "Strategy",
    description: "Product managers and consultants aligning technology decisions with business outcomes.",
    members: "2 strategists",
  },
  {
    name: "Quality & Support",
    description: "QA engineers and support specialists keeping every release bulletproof after launch.",
    members: "2 specialists",
  },
];

/*
 * To add real photos:
 *   1. Drop each image into  src/assets/image/team/  (e.g. alex.jpg)
 *   2. Set the `photo` field below to the imported image (or leave empty for initials avatar)
 *
 * Example:
 *   import alexPhoto from "../../assets/image/team/alex.jpg";
 *   { name: "Alex Navarro", role: "Engineering Lead", photo: alexPhoto, ... }
 */
const teamMembers = [
  { name: "Alex Navarro",    role: "Engineering Lead",         photo: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Mira Santos",     role: "Senior Frontend Engineer", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Daniel Cruz",     role: "Backend Engineer",         photo: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Jasmine Reyes",   role: "Mobile Developer",         photo: "https://randomuser.me/api/portraits/women/22.jpg" },
  { name: "Paolo Mendoza",   role: "DevOps Engineer",          photo: "https://randomuser.me/api/portraits/men/71.jpg" },
  { name: "Clara Villanueva",role: "Product Designer",         photo: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Kim Torres",      role: "UX Researcher",            photo: "https://randomuser.me/api/portraits/women/11.jpg" },
  { name: "Marcus Tan",      role: "Product Manager",          photo: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Liana Ocampo",    role: "Strategy Consultant",      photo: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Ethan Garcia",    role: "QA Engineer",              photo: "https://randomuser.me/api/portraits/men/85.jpg" },
  { name: "Nina Del Rosario",role: "Support Specialist",       photo: "https://randomuser.me/api/portraits/women/50.jpg" },
];

// Rotating gradient palette so each avatar feels unique
const memberGradients = [
  "linear-gradient(135deg, #4f8cff, #6c5ce7)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #30cfd0, #330867)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #ffecd2, #fcb69f)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #ffa8a8, #fcff9e)",
  "linear-gradient(135deg, #c471f5, #fa71cd)",
];

const careers = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Mobile Developer (React Native)",
    location: "Remote",
    type: "Full-time",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "Product Designer",
    location: "On-site",
    type: "Full-time",
    tags: ["Figma", "UX Research", "Design Systems"],
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Contract",
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
];

const projects = [
  {
    title: "Healthcare Patient Portal",
    category: "Healthcare",
    description:
      "A HIPAA-compliant patient management platform used by 12+ clinics to handle scheduling, records, and telemedicine.",
    tags: ["React", "Django", "AWS"],
  },
  {
    title: "FinTech Payment Gateway",
    category: "Finance",
    description:
      "A PCI-compliant payment gateway processing millions of transactions monthly with sub-second latency.",
    tags: ["Node.js", "Kafka", "PostgreSQL"],
  },
  {
    title: "Logistics Tracking Suite",
    category: "Logistics",
    description:
      "A real-time fleet and shipment tracking system that cut delivery delays by 40% for a regional logistics firm.",
    tags: ["React Native", "GraphQL", "Redis"],
  },
  {
    title: "E-Commerce Storefront",
    category: "Retail",
    description:
      "A headless e-commerce platform with a custom CMS, increasing conversions by 35% post-launch.",
    tags: ["Next.js", "Stripe", "Sanity"],
  },
];

const testimonials = [
  {
    quote:
      "Zahga transformed our legacy system into a modern platform with zero downtime. Their team feels like an extension of ours.",
    name: "Sarah Lin",
    role: "CTO, MediCare Plus",
  },
  {
    quote:
      "From discovery to deployment, the communication was crystal clear. We've launched three products together and counting.",
    name: "Marcus Tan",
    role: "Founder, PayStream",
  },
  {
    quote:
      "They didn't just build what we asked for — they challenged us to build something better. That made all the difference.",
    name: "Elena Rivera",
    role: "VP Product, FleetLink",
  },
];

function Company() {
  return (
    <section id="company">
      {/* <div className="hero__bg"></div> */}
      <div className="hero__noise"></div>

      {/* About Us */}
      <div id="about-us" className="companySection">
        <div className="companyIntro">
          <div className="companyIntroTag">About Us</div>
          <h1 className="companyIntroTitle">
            Building software that moves businesses forward
          </h1>
          <p className="companyIntroDesc">
            We're a team of engineers, designers, and strategists who partner with
            companies to ship products that scale. Since day one, we've focused on
            one thing — delivering work we're proud of, to clients we trust.
          </p>
        </div>

        <div className="companyStats">
          {stats.map((stat, i) => (
            <div className="companyStatCard" key={i}>
              <div className="companyStatValue">{stat.value}</div>
              <div className="companyStatLabel">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="companyValuesHeader">
          <h2 className="companyValuesTitle">What we stand for</h2>
          <p className="companyValuesSubtitle">
            The principles that shape how we work and what we build.
          </p>
        </div>
        <div className="companyValuesGrid">
          {values.map((v, i) => (
            <div className="companyValueCard" key={i}>
              <div className="companyValueIcon">{v.icon}</div>
              <h3 className="companyValueTitle">{v.title}</h3>
              <p className="companyValueDesc">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Teams */}
      <div id="teams" className="companySection">
        <div className="sectionHeader">
          <p className="sectionTitle">Our Teams</p>
          <p className="sectionSubtitle">
            Cross-functional groups collaborating to turn ideas into production-ready products.
          </p>
        </div>
        <div className="companyTeamsGrid">
          {teams.map((t, i) => (
            <div className="companyTeamCard" key={i}>
              <div className="companyTeamBadge">{t.members}</div>
              <h3 className="companyTeamName">{t.name}</h3>
              <p className="companyTeamDesc">{t.description}</p>
            </div>
          ))}
        </div>

        {/* Meet the Team */}
        <div className="companyMembersHeader">
          <h2 className="companyMembersTitle">Meet the Team</h2>
          <p className="companyMembersSubtitle">
            The 11 people behind every project we ship.
          </p>
        </div>
        <div className="companyMembersGrid">
          {teamMembers.map((m, i) => {
            const initials = m.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("");
            const gradient = memberGradients[i % memberGradients.length];
            return (
              <div
                className="companyMemberCard"
                key={i}
                style={{ "--member-grad": gradient }}
              >
                <div className="companyMemberGlow" aria-hidden="true"></div>
                <div className="companyMemberPhotoRing">
                  <div className="companyMemberPhotoWrap">
                    {m.photo ? (
                      <img
                        className="companyMemberPhoto"
                        src={m.photo}
                        alt={m.name}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <span className="companyMemberInitials">{initials}</span>
                    )}
                  </div>
                  <span className="companyMemberStatus" aria-hidden="true"></span>
                </div>
                <h3 className="companyMemberName">{m.name}</h3>
                <p className="companyMemberRole">{m.role}</p>
                <div className="companyMemberDivider" aria-hidden="true"></div>
                <div className="companyMemberSocials">
                  <a
                    href="#"
                    className="companyMemberSocial"
                    aria-label={`${m.name} on LinkedIn`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="companyMemberSocial"
                    aria-label={`${m.name} on Twitter`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:hello@zahga.com"
                    className="companyMemberSocial"
                    aria-label={`Email ${m.name}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Careers */}
      <div id="careers" className="companySection">
        <div className="sectionHeader">
          <p className="sectionTitle">Careers</p>
          <p className="sectionSubtitle">
            Join a team that values craftsmanship, curiosity, and honest collaboration.
          </p>
        </div>
        <div className="companyCareersList">
          {careers.map((c, i) => (
            <div className="companyCareerCard" key={i}>
              <div className="companyCareerInfo">
                <h3 className="companyCareerTitle">{c.title}</h3>
                <div className="companyCareerMeta">
                  <span>{c.location}</span>
                  <span className="companyCareerDot">•</span>
                  <span>{c.type}</span>
                </div>
                <div className="companyCareerTags">
                  {c.tags.map((tag, j) => (
                    <span className="tag" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
              <button className="companyCareerApply">
                Apply
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="companySection">
        <div className="sectionHeader">
          <p className="sectionTitle">Projects</p>
          <p className="sectionSubtitle">
            A selection of the work our teams have shipped for partners across industries.
          </p>
        </div>
        <div className="companyProjectsGrid">
          {projects.map((p, i) => (
            <div className="companyProjectCard" key={i}>
              <span className="companyProjectCategory">{p.category}</span>
              <h3 className="companyProjectTitle">{p.title}</h3>
              <p className="companyProjectDesc">{p.description}</p>
              <div className="companyProjectTags">
                {p.tags.map((tag, j) => (
                  <span className="tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="companySection">
        <div className="sectionHeader">
          <p className="sectionTitle">Testimonials</p>
          <p className="sectionSubtitle">
            What our clients say about working with us.
          </p>
        </div>
        <div className="companyTestimonialsGrid">
          {testimonials.map((t, i) => (
            <div className="companyTestimonialCard" key={i}>
              <svg className="companyTestimonialQuote" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6zm10 0a5.17 5.17 0 0 0-5.17 5.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
              </svg>
              <p className="companyTestimonialQuoteText">"{t.quote}"</p>
              <div className="companyTestimonialAuthor">
                <div className="companyTestimonialAvatar">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="companyTestimonialName">{t.name}</div>
                  <div className="companyTestimonialRole">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="companyCtaWrap">
          <Link to="/contact" className="companyCta">
            Work with us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Company;
