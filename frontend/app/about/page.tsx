import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="page-content">
        <section className="section-block">
          <div className="section-heading">
            <span className="eyebrow">About MODIT</span>
            <h1>Building a smarter construction supply experience for Delhi NCR.</h1>
          </div>
          <div className="content-block">
            <p>
              MODIT is crafted to help contractors, builders and retailers in Delhi NCR manage procurement and deliver projects
              without delays. Our platform combines verified suppliers, transparent pricing, and local delivery readiness.
            </p>
            <p>
              From cement and steel to electrical and plumbing products, the MODIT experience is built for speed, quality and
              procurement confidence in the region.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <strong>Focused on Delhi NCR</strong>
              <span>Local supply, realistic delivery timelines and regional pricing.</span>
            </div>
            <div className="stat-card">
              <strong>Project-ready sourcing</strong>
              <span>Curated materials for foundations, interiors, and MEP installations.</span>
            </div>
            <div className="stat-card">
              <strong>Trusted partners</strong>
              <span>Verified vendors with consistent supply performance.</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
