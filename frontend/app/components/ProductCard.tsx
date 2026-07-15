import Link from 'next/link';
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <span className="product-price">{product.price}</span>
          <span className="product-availability">{product.availability}</span>
        </div>
      </div>
      <div className="product-card-footer">
        <Link href={`/products/${product.slug}`} className="link-button">
          View details
        </Link>
      </div>
    </article>
  );
}
