import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="page-content">
        <section className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Product catalog</span>
            <h1>Building materials and equipment for Delhi NCR.</h1>
            <p>Browse curated materials in categories such as structural, finishing, electrical and plumbing.</p>
          </div>
          <div className="grid products-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link href="/contact" className="button-secondary">
              Ask for bulk pricing
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
