import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="brand-footer">MODIT - Delhi NCR building material sourcing</p>
          <p>Reliable supplies. Transparent pricing. Project-ready delivery.</p>
        </div>
        <div className="footer-links">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
