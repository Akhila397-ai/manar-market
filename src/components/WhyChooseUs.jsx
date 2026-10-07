import { Award, Clock, Heart, Leaf } from 'lucide-react';
import { whyUs } from '../data/content.js';
import Reveal from './Reveal.jsx';

const iconMap = { award: Award, leaf: Leaf, clock: Clock, heart: Heart };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <Reveal as="header" className="section-head">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">Why Choose Manar Market</h2>
        </Reveal>

        <div className="features">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} as="article" className="feature" delay={i * 0.1} y={30}>
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
