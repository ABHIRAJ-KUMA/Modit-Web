import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { products } from '@/lib/products';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: Params) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="page-shell">
      <Header />

      <main className="page-content">
        <section className="section-block">
          <div className="product-detail-card">
            <div>
              <span className="eyebrow">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="product-description">{product.description}</p>
              <div className="product-details">
                <span className="product-price">{product.price}</span>
                <span className="product-availability">{product.availability}</span>
              </div>
              <div className="feature-list">
                {product.highlights.map((highlight) => (
                  <p key={highlight} className="feature-line">• {highlight}</p>
                ))}
              </div>
              <div className="section-footer">
                <Link href="/contact" className="button-primary">
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
