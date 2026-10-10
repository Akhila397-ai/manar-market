import { Award, Clock, Heart, Leaf } from 'lucide-react';
import { whyUs } from '../data/content.js';
import { Reveal, Stagger, StaggerItem } from './Reveal.jsx';

const iconMap = { award: Award, leaf: Leaf, clock: Clock, heart: Heart };

export default function WhyChooseUs() {
  return (
    <section id="stores" className="section section-alt" style={{ position: 'relative' }}>
      <span id="why-us" aria-hidden="true" style={{ position: 'absolute', top: 0, height: 0, width: 0, overflow: 'hidden' }} />
      <div className="container">
        <Reveal as="header" className="section-head">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">Why Choose Manar Market</h2>
        </Reveal>

        <Stagger className="features">
          {whyUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.title} as="article" className="feature">
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
