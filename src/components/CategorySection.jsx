import { categories } from '../data/content.js';
import { Reveal, Stagger, StaggerItem } from './Reveal.jsx';
import CategoryCard from './CategoryCard.jsx';

export default function CategorySection() {
  return (
    <section id="categories" className="section">
      <div className="container">
        <Reveal as="header" className="section-head">
          <span className="eyebrow">Our Range</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-lead">Everything for your everyday needs, thoughtfully organized.</p>
        </Reveal>

        <Stagger className="cat-grid">
          {categories.map((category) => (
            <StaggerItem key={category.id} className="cat-slot">
              <CategoryCard category={category} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
