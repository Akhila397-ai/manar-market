import { products } from '../data/content.js';
import Reveal from './Reveal.jsx';
import ProductCard from './ProductCard.jsx';

export default function PopularPicks() {
  return (
    <section id="popular" className="section section-alt">
      <div className="container">
        <Reveal as="header" className="section-head">
          <span className="eyebrow">Popular Picks</span>
          <h2 className="section-title">Customer Favourites</h2>
          <p className="section-lead">A glimpse of the everyday essentials our shoppers reach for most.</p>
        </Reveal>

        <div className="popular-grid">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 0.1} y={40}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
