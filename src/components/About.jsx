import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BadgePercent,
  CheckCircle2,
  Clock,
  Heart,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import SafeImage from './SafeImage.jsx';
import { Reveal, Stagger, StaggerItem } from './Reveal.jsx';
import { ImageReveal } from './Parallax.jsx';

import aboutImg from '../assets/images/about/about.webp';
import heroFresh from '../assets/images/hero/hero-fresh.webp';
import heroGroceries from '../assets/images/hero/hero-groceries.webp';
import heroStaples from '../assets/images/hero/hero-staples.webp';

// Three refined promise cards
const promises = [
  {
    icon: Leaf,
    title: 'Freshness',
    text: 'Sourced daily from trusted regional growers and verified suppliers. We bring crisp fruits, farm vegetables, and wholesome dairy to your kitchen at peak flavor and nutritional vitality.',
  },
  {
    icon: Award,
    title: 'Quality',
    text: 'Rigorous selection standards for every brand and essential product. We ensure consistent purity, safety, and trusted household performance across all our aisles.',
  },
  {
    icon: Heart,
    title: 'Community',
    text: 'More than a market—a welcoming neighborhood cornerstone. We cultivate lasting trust with UAE families through courteous assistance, genuine care, and transparent everyday value.',
  },
];

// Everything Under One Roof convenience items
const roofHighlights = [
  {
    title: 'Farm-Fresh Produce & Dairy',
    detail: 'Daily deliveries of crisp fruits, crisp greens, farm dairy, and chilled staples.',
  },
  {
    title: 'Pantry Staples & Global Groceries',
    detail: 'Finest grains, cooking oils, aromatic spices, and international favorites.',
  },
  {
    title: 'Household & Home Care Essentials',
    detail: 'Trusted cleaning supplies, detergents, and everyday household products.',
  },
  {
    title: 'Personal Care & Lifestyle Necessities',
    detail: 'Wholesome hygiene, bath, and daily wellness essentials for the entire family.',
  },
];

// Our Commitment pillars
const commitments = [
  {
    icon: Leaf,
    title: 'Guaranteed Freshness',
    text: 'Daily replenishments ensuring vitality in every fresh purchase.',
  },
  {
    icon: ShieldCheck,
    title: 'Dependable Quality',
    text: 'Carefully vetted brands and safe, authentic household items.',
  },
  {
    icon: BadgePercent,
    title: 'Everyday Fair Value',
    text: 'Honest, accessible pricing with no compromise on excellence.',
  },
  {
    icon: HeartHandshake,
    title: 'Attentive Customer Care',
    text: 'Warm, respectful service that makes every visit welcoming.',
  },
];

export default function About() {
  return (
    <div id="about" className="about-page">
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="container">
          <Reveal as="header" className="about-hero-header">
            <span className="about-eyebrow">About Manar Market</span>
            <h1 className="about-hero-headline">
              More Than Shopping.
              <br />
              A Part of Your Everyday Life.
            </h1>
            <p className="about-hero-lead">
              Serving households across the UAE with wholesome freshness, dependable quality, and
              warm neighborhood care. We make everyday living simpler, healthier, and more enjoyable.
            </p>
          </Reveal>

          <ImageReveal className="about-hero-media">
            <SafeImage
              src={heroFresh}
              alt="Vibrant fresh produce and organic fruits at Manar Market"
              loading="eager"
            />
          </ImageReveal>

          <div className="about-hero-stats">
            <div className="about-stat-item">
              <strong>Decades</strong>
              <span>of trusted service across the UAE</span>
            </div>
            <div className="about-stat-item">
              <strong>Daily Fresh</strong>
              <span>farm harvests & wholesome essentials</span>
            </div>
            <div className="about-stat-item">
              <strong>One Destination</strong>
              <span>groceries, home care & lifestyle needs</span>
            </div>
            <div className="about-stat-item">
              <strong>Family First</strong>
              <span>courteous service & genuine care</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="about-section about-section-alt">
        <div className="container">
          <div className="about-split">
            <ImageReveal className="about-story-media">
              <SafeImage
                src={aboutImg}
                alt="Inside Manar Market aisles stocked with everyday essentials"
              />
            </ImageReveal>

            <div className="about-story-content">
              <Reveal as="header">
                <span className="about-eyebrow">Our Story</span>
                <h2 className="about-section-heading">
                  Rooted in Trust.
                  <br />
                  Growing with Our Communities.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="about-text-body">
                  <p>
                    With decades of dedicated service across the UAE, Manar Market has grown alongside the
                    families, neighborhoods, and communities we are honored to serve. What began as a humble
                    commitment to honest neighborhood retail has blossomed into a cherished shopping destination
                    built on mutual trust and genuine connection.
                  </p>
                  <p>
                    We believe the table is the center of the home. That is why we dedicate ourselves to sourcing
                    uncompromising freshness, dependable quality, and honest everyday value across our extensive
                    selection—from crisp farm-fresh produce and wholesome grocery staples to household essentials
                    and everyday lifestyle necessities.
                  </p>
                  <p>
                    Our journey continues with an enduring mission: keeping daily shopping effortless, welcoming,
                    and rewarding for every generation of shoppers who walk through our doors.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Promise Section */}
      <section className="about-section">
        <div className="container">
          <Reveal as="header" className="about-center-header">
            <span className="about-eyebrow">Our Promise</span>
            <h2 className="about-section-heading">Guiding Principles in Everything We Do</h2>
            <p className="about-section-lead">
              Three steadfast commitments form the foundation of our standards, our sourcing, and our service.
            </p>
          </Reveal>

          <Stagger className="about-promise-grid">
            {promises.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title} as="div" className="about-promise-card">
                  <div className="about-card-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="about-card-title">{item.title}</h3>
                  <p className="about-card-text">{item.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* 4. Everything Under One Roof */}
      <section className="about-section about-section-alt">
        <div className="container">
          <div className="about-split about-split-reverse">
            <ImageReveal className="about-roof-media">
              <SafeImage
                src={heroGroceries}
                alt="Well-organized grocery shelves and household necessities at Manar Market"
              />
            </ImageReveal>

            <div className="about-roof-content">
              <Reveal as="header">
                <span className="about-eyebrow">Complete Convenience</span>
                <h2 className="about-section-heading">Everything Under One Roof</h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="about-intro-p">
                  Your time is precious, and managing a household should be simple. Manar Market brings together
                  every facet of your daily shopping list—from fresh cooking ingredients to everyday home
                  care—in one elegantly organized, spacious market.
                </p>

                <ul className="about-highlights-list">
                  {roofHighlights.map((hl) => (
                    <li key={hl.title} className="about-highlight-item">
                      <div className="about-hl-icon">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <strong>{hl.title}</strong>
                        <span>{hl.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="about-actions-row">
                  <motion.a
                    href="#categories"
                    className="about-btn-primary"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore Categories
                    <ArrowRight size={17} />
                  </motion.a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Community */}
      <section className="about-section">
        <div className="container">
          <div className="about-split">
            <ImageReveal className="about-community-media">
              <SafeImage
                src={heroStaples}
                alt="Welcoming modern supermarket aisle and attentive customer care at Manar Market"
              />
            </ImageReveal>

            <div className="about-community-content">
              <Reveal as="header">
                <span className="about-eyebrow">Our Community</span>
                <h2 className="about-section-heading">Serving with Warmth and Genuine Care</h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="about-text-body">
                  <p>
                    Community is not just where we operate—it is the heart of why we exist. Over the years,
                    we have had the privilege of serving generations of families, learning the rhythms of
                    their daily needs, and greeting familiar faces with warmth and respect.
                  </p>
                  <p>
                    We believe that exceptional customer service starts with active listening, meticulous
                    store hygiene, and an inviting atmosphere where shoppers never feel rushed. Every team
                    member is dedicated to making your visit pleasant, effortless, and reliably fulfilling.
                  </p>
                </div>

                <div className="about-quote-box">
                  <p>
                    “True retail excellence is rooted in human care. Every fresh delivery, every clean aisle,
                    and every fair price is our promise of respect to the families who choose us.”
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Commitment */}
      <section className="about-section about-section-alt">
        <div className="container">
          <Reveal as="header" className="about-center-header">
            <span className="about-eyebrow">Our Commitment</span>
            <h2 className="about-section-heading">Standards We Stand Behind Daily</h2>
            <p className="about-section-lead">
              A concise promise to every customer: freshness, quality, everyday value, effortless convenience,
              and genuine care in every visit.
            </p>
          </Reveal>

          <Stagger className="about-commitment-grid">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title} as="div" className="about-commitment-card">
                  <div className="about-commit-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="about-commit-title">{item.title}</h3>
                  <p className="about-commit-text">{item.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* 7. Closing Section */}
      <section className="about-closing">
        <div className="container">
          <Reveal className="about-closing-inner">
            <span className="about-eyebrow-light">Manar Hypermarket</span>
            <h2 className="about-closing-headline">
              Good Choices. Genuine Care. Everyday Value.
            </h2>
            <p className="about-closing-text">
              Experience the difference of a neighborhood hypermarket dedicated to quality, freshness, and
              honest prices. Step into Manar Market today or discover our offerings online.
            </p>
            <div className="about-closing-actions">
              <motion.a
                href="#categories"
                className="about-closing-btn"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                Explore Categories
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className="about-closing-ghost"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                Visit Our Store
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
