import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="page-shell">
      <Header />
      <main className="page-content section-block">
        <div className="not-found-card">
          <h1>Page not found</h1>
          <p>The page you requested does not exist or may have moved.</p>
          <Link href="/" className="button-primary">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
