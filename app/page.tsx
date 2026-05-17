import Image from "next/image";

const features = [
  {
    title: "Semantic Risk Analysis",
    desc: "Analyze code with semantic context to surface high-impact regressions before merges."
  },
  {
    title: "Risk Scoring",
    desc: "Prioritize reviews with severity-based scoring tuned for modern delivery pipelines."
  },
  {
    title: "Dependency Graph",
    desc: "Visualize file-level and service-level impact paths to reduce blind spots."
  },
  {
    title: "AI Insights",
    desc: "Turn diffs into actionable narratives so teams know exactly what changed and why."
  },
  {
    title: "Regression Scenarios",
    desc: "Generate probable failure scenarios with confidence indicators for rapid triage."
  },
  {
    title: "CLI Tooling",
    desc: "Integrate PRISM into developer workflows with clean commands and CI support."
  },
  {
    title: "Interactive Dashboard",
    desc: "Track risks across commits and releases with clear operational visibility."
  }
];

const steps = [
  {
    step: "Step 01",
    title: "Analyze Pull Request",
    desc: "PRISM inspects code context, dependencies, and risk signals automatically."
  },
  {
    step: "Step 02",
    title: "Traverse Graph",
    desc: "It maps impact paths across your services and modules in real time."
  },
  {
    step: "Step 03",
    title: "AI Insights",
    desc: "Receive clear, explainable recommendations for safer merges."
  }
];

const logos = ["IBM BOB", "OPENROUTER AI", "SECURECODE"];

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <header className="topbar">
          <div className="brand">
            <span className="brandDot">◈</span>
            <span>PRISM</span>
          </div>
          <nav className="nav">
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Customer Stories</a>
          </nav>
          <button className="btn btnPrimary">Try Online</button>
        </header>

        <section className="hero section">
          <div className="heroText">
            <div className="chips">
              <span>Python 3.12+</span>
              <span>FastAPI</span>
              <span>SQLite</span>
            </div>
            <h1>
              Semantic Risk Analysis for
              <br />
              <span>Modern Codebases.</span>
            </h1>
            <p>
              PRISM identifies complex regressions and security vulnerabilities by
              understanding the intent of your code, not just the changes.
            </p>
            <div className="heroActions">
              <button className="btn btnPrimary">Get Started</button>
              <button className="btn btnGhost">View Demo</button>
            </div>
          </div>
          <div className="heroImageWrap">
            <Image
              src="https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg"
              alt="Team working with hardware"
              width={640}
              height={420}
              className="heroImage"
            />
          </div>
        </section>

        <section className="story section">
          <div className="storyLeft">
            <span className="kicker">About PRISM</span>
            <h2>Going Beyond Traditional Diffing</h2>
            <p>
              Most CI tools look at what changed. PRISM looks at why it matters.
              By connecting code semantics and project context, it finds regressions
              traditional diff checks miss.
            </p>
            <div className="miniCards">
              <div>
                <strong>Context Aware</strong>
                <p>Understands business and architectural intent.</p>
              </div>
              <div>
                <strong>Risk Quantified</strong>
                <p>Every change receives a prioritized risk score.</p>
              </div>
            </div>
          </div>
          <div />
        </section>

        <section className="section centered">
          <h2>Engineered for Reliability</h2>
          <p className="sectionIntro">
            A comprehensive suite of tools designed to provide total visibility to
            your software risk profile.
          </p>
          <div className="featureGrid">
            {features.map((feature) => (
              <article key={feature.title} className="featureCard">
                <div className="featureIcon">
                  <span />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work section">
          <span className="pill">The Workflow</span>
          <h2>How PRISM Works</h2>
          <div className="steps">
            {steps.map((item) => (
              <div key={item.step} className="stepCard">
                <div className="stepIcon" />
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="setup section">
          <div className="setupCard">
            <div>
              <h2>Up and Running in Seconds</h2>
              <p>
                PRISM is designed to be developer friendly. No complex
                configuration. No bulky overhead.
              </p>
              <ul>
                <li>Simple install in under 2 minutes</li>
                <li>Works with modern dev ecosystems</li>
                <li>Zero-config for standard Python.js projects</li>
              </ul>
              <button className="btn btnPrimary">Read Full Setup Guide</button>
            </div>
            <pre>
              <code>{`prism analyze <pr-id>\nprism analyze <pr-id> --repo <repo-url>\nprism demo`}</code>
            </pre>
          </div>
        </section>

        <section className="visibility section">
          <div className="visibilityHeader">
            <div>
              <h2>Full Visibility</h2>
              <p>Every node, every line, every risk exposed in real time.</p>
            </div>
            <button className="btn btnGhost">Export Visualization</button>
          </div>
          <div className="wideImageWrap">
            <Image
              src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1400&q=80"
              alt="Full visibility dashboard preview"
              width={1400}
              height={620}
              className="wideImage"
            />
            <div className="overlayCard">
              <span className="overlayLabel">Insight Summary</span>
              <h4>Deep Impact Analysis</h4>
              <p>
                PRISM detected a high-risk regression path across 4 services with
                12 files impacted. Review the critical nodes before merging.
              </p>
            </div>
          </div>
        </section>

        <section className="brands section centered">
          <p className="muted">Powered by Industry Leaders</p>
          <div className="brandRow">
            {logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </section>

        <section className="cta section centered">
          <h2>Ready to Secure Your Code?</h2>
          <p>
            Join thousands of developers using PRISM to build safer, more reliable
            software today.
          </p>
          <div className="heroActions">
            <button className="btn btnLight">Try PRISM Free</button>
            <button className="btn btnOutline">Schedule a Demo</button>
          </div>
        </section>

        <footer className="footer">
          <div className="footerCols">
            <div>
              <div className="brand">
                <span className="brandDot">◈</span>
                <span>PRISM</span>
              </div>
              <p>Semantic code intelligence for secure and resilient engineering.</p>
            </div>
            <div>
              <h4>Product</h4>
              <a href="#">Overview</a>
              <a href="#">Risk Scoring</a>
              <a href="#">Dashboard</a>
            </div>
            <div>
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Pricing</a>
            </div>
            <div>
              <h4>Stay Updated</h4>
              <div className="newsletter">
                <input placeholder="email@service.com" />
                <button>Join</button>
              </div>
            </div>
          </div>
          <div className="copyright">© 2026 PRISM project. All rights reserved.</div>
        </footer>
      </div>
    </main>
  );
}
