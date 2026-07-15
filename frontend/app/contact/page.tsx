import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="page-content">
        <section className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Contact MODIT</span>
            <h1>Get support for procurement, quotes and delivery planning.</h1>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h2>Reach our team</h2>
              <p>Email: hello@modit.co.in</p>
              <p>Phone: +91 98765 43210</p>
              <p>Serving Delhi NCR construction and real estate projects.</p>
            </div>
            <div className="contact-card form-card">
              <h2>Request a callback</h2>
              <form className="contact-form">
                <label>
                  Name
                  <input type="text" placeholder="Your name" />
                </label>
                <label>
                  Company
                  <input type="text" placeholder="Company or site" />
                </label>
                <label>
                  Phone or email
                  <input type="text" placeholder="Phone or email" />
                </label>
                <label>
                  Message
                  <textarea rows={5} placeholder="Tell us your project need" />
                </label>
                <button type="submit" className="button-primary">
                  Submit request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
