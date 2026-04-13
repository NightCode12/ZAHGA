import { useState } from "react";
import "../../assets/style/contact.css";

const offices = [
  {
    city: "Zamboanga City",
    country: "Philippines",
    address: "2nd Floor. (Fronting SIMOSA Canelar), Mayor Jaldon Street, Canelar Moret, Zamboanga City, 7000 Zamboanga del Sur",
    phone: "+63 2 8123 4567",
    email: "manila@zahga.com",
  },
  {
    city: "Zamboanga City",
    country: "Philippines",
    address: "2nd Floor. (Red Building front of Gas Station), San Roque Rd, Barangay San Jose Gusu, Zamboanga City, Zamboanga Sibugay",
    phone: "+65 6789 1234",
    email: "sg@zahga.com",
  },
];

const supportChannels = [
  {
    title: "General Inquiries",
    description: "Questions about our services, partnerships, or company.",
    contact: "hello@zahga.com",
    responseTime: "Within 24 hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Technical Support",
    description: "Already a client? Our support team is ready to help.",
    contact: "support@zahga.com",
    responseTime: "Within 4 business hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Sales & Partnerships",
    description: "Looking to build something together? Let's talk.",
    contact: "sales@zahga.com",
    responseTime: "Within 24 hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Careers",
    description: "Interested in joining the team? Reach out here.",
    contact: "careers@zahga.com",
    responseTime: "Within 1 week",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How do I start a project with Zahga?",
    answer:
      "Fill out the contact form above or email hello@zahga.com. We'll schedule a discovery call within 24 hours to understand your goals, timeline, and budget before sending a detailed proposal.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "We usually start with a 1–2 week discovery sprint, then move into iterative delivery in 2-week cycles. You get demos, progress reports, and direct Slack access to the team throughout.",
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer:
      "Both. We've partnered with early-stage startups validating MVPs and with enterprises modernizing legacy systems. Our approach scales to match the stage of your business.",
  },
  {
    question: "Can you sign an NDA before we share project details?",
    answer:
      "Absolutely. We sign NDAs as a standard step before discussing any project specifics. Just let us know on the contact form and we'll send one over.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer fixed-price engagements for well-scoped projects and monthly retainers for ongoing work. Pricing depends on scope, complexity, and team size.",
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", company: "", subject: "", message: "" });
  }

  return (
    <section id="contact">
      {/* <div className="hero__bg"></div> */}
      <div className="hero__noise"></div>

      {/* Get in Touch */}
      <div id="get-in-touch" className="contactSection">
        <div className="contactIntro">
          <div className="contactIntroTag">Contact</div>
          <h1 className="contactIntroTitle">Let's build something great</h1>
          <p className="contactIntroDesc">
            Tell us about your project or just say hello. We read every message and
            reply within one business day.
          </p>
        </div>

        <div className="contactFormWrap">
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="contactFormRow">
              <div className="contactField">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contactField">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div className="contactFormRow">
              <div className="contactField">
                <label htmlFor="company">Company</label>
                <input
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name (optional)"
                  className="companyNameInput"
                />
              </div>
              <div className="contactField">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>
            </div>

            <div className="contactField">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, timeline, and goals..."
                required
              />
            </div>

            <button type="submit" className="contactSubmit">
              Send message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>

            {submitted && (
              <div className="contactSuccess">
                Thanks! Your message has been received.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Office Locations */}
      <div id="offices" className="contactSection">
        <div className="sectionHeader">
          <p className="sectionTitle">Office Locations</p>
          <p className="sectionSubtitle">
            Visit us in person or catch up with our distributed team.
          </p>
        </div>
        <div className="contactOfficesGrid">
          {offices.map((o, i) => (
            <div className="contactOfficeCard" key={i}>
              <div className="contactOfficeHeader">
                <h3 className="contactOfficeCity">{o.city}</h3>
                <span className="contactOfficeCountry">{o.country}</span>
              </div>
              <div className="contactOfficeRow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{o.address}</span>
              </div>
              <div className="contactOfficeRow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{o.phone}</span>
              </div>
              <div className="contactOfficeRow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${o.email}`}>{o.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support */}
      <div id="support" className="contactSection">
        <div className="sectionHeader">
          <p className="sectionTitle">Support Channels</p>
          <p className="sectionSubtitle">
            Pick the right channel and we'll route you to the right team quickly.
          </p>
        </div>
        <div className="contactSupportGrid">
          {supportChannels.map((s, i) => (
            <div className="contactSupportCard" key={i}>
              <div className="contactSupportIcon">{s.icon}</div>
              <h3 className="contactSupportTitle">{s.title}</h3>
              <p className="contactSupportDesc">{s.description}</p>
              <a href={`mailto:${s.contact}`} className="contactSupportEmail">
                {s.contact}
              </a>
              <div className="contactSupportMeta">{s.responseTime}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="contactSection">
        <div className="sectionHeader">
          <p className="sectionTitle">Frequently Asked Questions</p>
          <p className="sectionSubtitle">
            Quick answers to the questions we hear most often.
          </p>
        </div>
        <div className="contactFaqList">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div className={`contactFaqItem${isOpen ? " open" : ""}`} key={i}>
                <button
                  className="contactFaqQuestion"
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.question}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="contactFaqAnswer">
                  <p>{f.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
