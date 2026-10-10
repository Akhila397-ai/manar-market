import { products } from '../data/content.js';
import { Reveal, Stagger, StaggerItem } from './Reveal.jsx';
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

        <Stagger className="popular-grid">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
