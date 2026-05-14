import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  LockKeyhole,
  Network,
  PencilLine,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import "./styles.css";

const asset = (name: string) => `/assets/generated-no-text/${name}`;

const nav = [
  ["Products", "#products"],
  ["Services", "#services"],
  ["Platform", "#platform"],
  ["Pricing", "#pricing"],
  ["Resources", "#footer-resources"],
  ["Company", "#company"],
];

const trustItems: Array<{ line1: string; line2: string; icon: LucideIcon }> = [
  { line1: "Enterprise Grade", line2: "Security", icon: ShieldCheck },
  { line1: "Global Expert", line2: "Network", icon: Network },
  { line1: "SOC 2 Type II", line2: "Certified", icon: Sparkles },
];

const capabilities: Array<{ title: string; body: string; icon: LucideIcon }> = [
  { title: "Multimodal Datasets", body: "Curated for quality", icon: Database },
  { title: "Expert Annotation", body: "Human-in-the-loop", icon: PencilLine },
  { title: "Evaluation & Testing", body: "Measure what matters", icon: CheckCircle2 },
  { title: "RL Environments", body: "Train and evaluate agents", icon: Network },
  { title: "Secure Delivery", body: "Private, compliant, reliable", icon: LockKeyhole },
];

const lifecycle = [
  ["01", "Collect", "Capture real-world signals"],
  ["02", "Curate", "Clean, deduplicate, and prepare"],
  ["03", "Annotate", "Label with accuracy and context"],
  ["04", "Review", "Expert QA and consistency checks"],
  ["05", "Evaluate", "Measure quality across dimensions"],
  ["06", "Deliver", "Verified data ready for training"],
];

const datasets = [
  ["Image", "/assets/dataset-carousel/card-image.png"],
  ["Text", "/assets/dataset-carousel/card-text.png"],
  ["Code", "/assets/dataset-carousel/card-code.png"],
  ["Audio", "/assets/dataset-carousel/card-audio.png"],
  ["Video", "/assets/dataset-carousel/card-video.png"],
  ["3D / Point Cloud", "/assets/dataset-carousel/card-spatial.png"],
  ["Agentic Data", "/assets/dataset-carousel/card-agentic.png"],
];

const metrics = [
  ["100 PB+", "High-quality data produced"],
  ["10M+", "Hours of expert annotation"],
  ["99%+", "Average data accuracy"],
  ["300+", "Enterprise customers"],
  ["50+", "Countries supported"],
];

const footerColumns = [
  ["Products", "Datasets", "Annotation", "RL Environments", "Evaluation", "Platform"],
  ["Services", "Data Collection", "Data Processing", "Expert Annotation", "Model Evaluation", "Consulting"],
  ["Resources", "Documentation", "Case Studies", "Blog", "Guides", "Webinars"],
  ["Company", "About Us", "Careers", "News", "Contact"],
];

const footerLinkTargets: Record<string, string> = {
  Datasets: "#datasets",
  Annotation: "#annotation",
  "RL Environments": "#rl-environments",
  Evaluation: "#evaluation",
  Platform: "#platform",
  "Data Collection": "#services",
  "Data Processing": "#services",
  "Expert Annotation": "#annotation",
  "Model Evaluation": "#evaluation",
  Consulting: "#contact",
  Documentation: "#footer-resources",
  "Case Studies": "#footer-resources",
  Blog: "#footer-resources",
  Guides: "#footer-resources",
  Webinars: "#footer-resources",
  "About Us": "#footer-company",
  Careers: "#footer-company",
  News: "#footer-company",
  Contact: "#contact",
};

const footerColumnTargets: Record<string, string> = {
  Products: "footer-products",
  Services: "footer-services",
  Resources: "footer-resources",
  Company: "footer-company",
};

export default function App() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <CapabilityStrip />
      <Lifecycle />
      <DatasetSection />
      <AnnotationSection />
      <EvaluationRLSection />
      <MetricBand />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Home">
        <span className="brand-mark" />
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        {nav.map(([item, href]) => (
          <a href={href} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a className="button button-gold button-small" href="#contact">
        Talk to an Expert
        <ArrowRight size={16} strokeWidth={1.8} />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <img
        className="hero-art"
        src={asset("hero-workbench-bg.png")}
        alt=""
        draggable="false"
      />
      <div className="hero-copy">
        <h1>
          Human Intelligence.
          <br />
          Data for Frontier AI.
        </h1>
        <p>
          The high-quality data infrastructure for building, evaluating, and
          scaling the next generation of AI systems.
        </p>
        <div className="button-row">
          <a className="button button-gold" href="#contact">
            Talk to an Expert
            <ArrowRight size={17} strokeWidth={1.8} />
          </a>
          <a className="button button-dark" href="#platform">
            Explore Platform
          </a>
        </div>
        <div className="trust-row">
          {trustItems.map(({ line1, line2, icon: Icon }) => (
            <span className="trust-item" key={line1}>
              <Icon size={22} strokeWidth={1.55} />
              <b>{line1}</b>
              <small>{line2}</small>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  return (
    <section className="capability-section" id="products">
      <img className="section-bg" src={asset("capability-strip-bg.png")} alt="" />
      <div className="capability-grid">
        {capabilities.map(({ title, body, icon: Icon }) => (
          <article className="capability-item" key={title}>
            <span className="capability-icon">
              <Icon size={24} strokeWidth={1.55} />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Lifecycle() {
  return (
    <section className="lifecycle-section" id="services">
      <img className="section-bg" src={asset("data-lifecycle-bg.png")} alt="" />
      <SectionHeading
        title="Data Lifecycle"
        subtitle="From raw signals to reliable training data"
      />
      <div className="lifecycle-copy-grid">
        {lifecycle.map(([num, title, body]) => (
          <article className="lifecycle-copy" key={num}>
            <h3>
              {num} {title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <span className="rail-glow" />
    </section>
  );
}

function DatasetSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const wheelLock = useRef(0);
  const cardCount = datasets.length;
  const step = 360 / cardCount;

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + cardCount) % cardCount);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const handleWheel = (event: globalThis.WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const cursorInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!cursorInside || Math.abs(event.deltaY) < 12) {
        return;
      }

      event.preventDefault();

      const now = Date.now();
      if (now - wheelLock.current < 460) {
        return;
      }

      wheelLock.current = now;
      move(event.deltaY > 0 ? 1 : -1);
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, [cardCount]);

  return (
    <section className="dataset-section" id="datasets" ref={sectionRef}>
      <img className="section-bg" src="/assets/dataset-carousel/background.png" alt="" />
      <SectionHeading title="Curated Multimodal Datasets" />
      <div className="dataset-carousel-shell" aria-label="Dataset carousel">
        <div className="dataset-carousel-orbit">
          {datasets.map(([title, image], index) => {
            const angle = (index - activeIndex) * step;
            const normalized = ((angle + 540) % 360) - 180;
            const distance = Math.abs(normalized);
            const isActive = index === activeIndex;
            const isHidden = distance > 124;
            const isClickable = distance < 82;
            const opacity = isHidden ? 0 : distance > 96 ? 0.28 : distance > 48 ? 0.66 : 1;
            const scale = isActive ? 1.08 : distance < 60 ? 0.9 : 0.76;
            const zIndex = 1000 - Math.round(distance);

            return (
              <button
                aria-label={`Show ${title} dataset`}
                className={`dataset-carousel-card${isActive ? " is-active" : ""}`}
                key={title}
                onClick={() => setActiveIndex(index)}
                style={{
                  opacity,
                  pointerEvents: isClickable ? "auto" : "none",
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(var(--dataset-depth)) rotateY(${-angle}deg) scale(${scale})`,
                  zIndex,
                }}
                type="button"
              >
                <img alt="" src={image} draggable="false" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AnnotationSection() {
  return (
    <section className="annotation-section" id="platform">
      <span className="scroll-anchor" id="annotation" aria-hidden="true" />
      <img className="section-bg" src={asset("annotation-platform-bg.png")} alt="" />
      <div className="section-copy left-copy">
        <h2>
          <span>Expert Annotation</span>
          <span>& Quality Assurance</span>
        </h2>
        <p>
          Skilled annotators, rigorous review, and continuous quality monitoring
          at every step.
        </p>
        <a className="button button-dark" href="#contact">
          Learn More
          <ArrowRight size={15} strokeWidth={1.8} />
        </a>
      </div>
      <span className="platform-scan" />
      <span className="quality-pulse" />
    </section>
  );
}

function EvaluationRLSection() {
  return (
    <section className="evaluation-rl-section" id="resources">
      <img className="section-bg" src={asset("evaluation-rl-bg.png")} alt="" />
      <div className="section-copy eval-copy" id="evaluation">
        <h2>
          Model Evaluation
          <br />
          You Can Trust
        </h2>
        <p>Comprehensive evaluation across key dimensions.</p>
      </div>
      <div className="section-copy rl-copy" id="rl-environments">
        <h2>
          RL Environments
          <br />
          for Real-World Agents
        </h2>
        <p>Simulate complex enterprise systems for training and evaluation.</p>
        <a className="button button-dark" href="#contact">
          Learn More
          <ArrowRight size={15} strokeWidth={1.8} />
        </a>
      </div>
      <span className="rl-path-light" />
    </section>
  );
}

function MetricBand() {
  return (
    <section className="metric-section" id="proof">
      <img className="section-bg" src={asset("metrics-band-bg.png")} alt="" />
      <div className="metric-grid">
        {metrics.map(([value, label]) => (
          <article className="metric" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta-section" id="contact">
      <span className="scroll-anchor" id="pricing" aria-hidden="true" />
      <img className="section-bg" src={asset("final-cta-bg.png")} alt="" />
      <div className="section-copy cta-copy">
        <h2>
          Build Better AI
          <br />
          with Better Data
        </h2>
        <p>Partner with us to unlock the full potential of your AI models.</p>
        <div className="button-row">
          <a className="button button-gold" href="#contact">
            Talk to an Expert
            <ArrowRight size={16} strokeWidth={1.8} />
          </a>
          <a className="button button-dark" href="#datasets">
            Request a Dataset
            <ArrowRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
      <span className="cta-check-pulse" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-section" id="company">
      <img className="section-bg" src={asset("footer-bg.png")} alt="" />
      <div className="footer-content">
        <div className="newsletter">
          <h2>Stay in the loop</h2>
          <p>Insights on data, annotation, and frontier AI.</p>
          <form>
            <input aria-label="Email" placeholder="Enter your email" />
            <button type="button">Subscribe</button>
          </form>
        </div>
        <div className="footer-columns">
          {footerColumns.map(([title, ...links]) => (
            <div id={footerColumnTargets[title]} key={title}>
              <h3>{title}</h3>
              {links.map((link) => (
                <a href={footerLinkTargets[link] ?? "#top"} key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="connect">
          <h3>Connect</h3>
          <span>in</span>
          <span>x</span>
          <span>◎</span>
          <span>◌</span>
        </div>
      </div>
      <div className="legal">
        <span>© 2026. All rights reserved.</span>
        <span>Privacy&nbsp;&nbsp;&nbsp; Terms&nbsp;&nbsp;&nbsp; Security</span>
      </div>
    </footer>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
