import styles from './legacy.module.css';
import Link from 'next/link';

export default function LegacyPage() {
  const categories = [
    { title: 'Cement', desc: 'Cement, binders and additives' },
    { title: 'Steel', desc: 'Rebars, sections and mesh' },
    { title: 'Tiles', desc: 'Porcelain, ceramic and vitrified' },
    { title: 'Electrical', desc: 'Wires, switches and fittings' },
  ];

  const products = [
    { name: 'UltraTech 53', price: '₹440' },
    { name: 'RAMCO OPC', price: '₹400' },
    { name: 'MAHA CEMENT', price: '₹360' },
  ];

  return (
    <div>
      <div className={styles.container}>
        <header className={styles.hero}>
          <div>
            <div className={styles.eyebrow}>MODIT — Building Materials</div>
            <h1 className={styles.heroTitle}>Fast supply, reliable pricing, project-ready materials.</h1>
            <p className={styles.heroCopy}>
              MODIT helps contractors and retailers in Delhi NCR source cement, steel, tiles and
              tools from verified distributors with transparent pricing and regional logistics.
            </p>
            <div className={styles.actions}>
              <Link href="/products" className={styles.buttonPrimary}>Explore materials</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Contact sales</Link>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>Designed for Delhi NCR builders</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}><strong>2,100+</strong><div>Orders/month</div></div>
              <div className={styles.statCard}><strong>4.9</strong><div>Avg rating</div></div>
            </div>
          </aside>
        </header>

        <section className={styles.categories}>
          {categories.map((c) => (
            <div key={c.title} className={styles.catCard}>
              <h4>{c.title}</h4>
              <p className="text-sm">{c.desc}</p>
            </div>
          ))}
        </section>

        <section className={styles.productsGrid}>
          {products.map((p) => (
            <div key={p.name} className={styles.productCard}>
              <div style={{height:72, background:'#f3f4f6', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center'}}>{p.name}</div>
              <div style={{marginTop:8}}>
                <div style={{fontWeight:700}}>{p.price}</div>
                <div style={{marginTop:6}}><button style={{background:'#0f766e', color:'#fff', padding:'6px 10px', borderRadius:8}}>Add to cart</button></div>
              </div>
            </div>
          ))}
        </section>

        <footer className={styles.footerLegacy}>
          <div>© MODIT 2026 — Classic view</div>
        </footer>
      </div>
    </div>
  );
}
