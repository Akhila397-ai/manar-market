import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BadgePercent,
  CheckCircle2,
  Heart,
  HeartHandshake,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import SafeImage from './SafeImage.jsx';
import { Reveal, Stagger, StaggerItem } from './Reveal.jsx';
import { ImageReveal } from './Parallax.jsx';

import aboutImg from '../assets/images/about/about.webp';
import heroFresh from '../assets/images/hero/hero-fresh.webp';
import heroGroceries from '../assets/images/hero/hero-groceries.webp';
import heroStaples from '../assets/images/hero/hero-staples.webp';

// Three concise promise cards
const promises = [
  {
    icon: Leaf,
    title: 'Freshness',
    text: 'Fresh fruits, vegetables, and wholesome dairy delivered daily from trusted suppliers.',
  },
  {
    icon: Award,
    title: 'Quality',
    text: 'Rigorous selection standards ensuring safe and dependable household essentials.',
  },
  {
    icon: Heart,
    title: 'Community',
    text: 'A welcoming market dedicated to courteous service and honest everyday value.',
  },
];

// Everything Under One Roof convenience items
const roofHighlights = [
  {
    title: 'Produce & Dairy',
    detail: 'Fresh fruits, vegetables, farm dairy, and chilled staples.',
  },
  {
    title: 'Pantry & Groceries',
    detail: 'Grains, cooking oils, spices, and everyday staples.',
  },
  {
    title: 'Household Care',
    detail: 'Cleaning supplies, laundry care, and household paper.',
  },
  {
    title: 'Personal Care',
    detail: 'Hygiene, bath, and family wellness essentials.',
  },
];

// Our Commitment pillars
const commitments = [
  {
    icon: Leaf,
    title: 'Guaranteed Freshness',
    text: 'Daily arrivals keeping your kitchen stocked with fresh food.',
  },
  {
    icon: ShieldCheck,
    title: 'Dependable Quality',
    text: 'Reliable brands and safe everyday products.',
  },
  {
    icon: BadgePercent,
    title: 'Everyday Fair Value',
    text: 'Competitive and honest pricing across every aisle.',
  },
  {
    icon: HeartHandshake,
    title: 'Attentive Customer Care',
    text: 'Helpful, respectful staff ready to assist you.',
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
              Quality Essentials for Everyday Living.
            </h1>
            <p className="about-hero-lead">
              Serving UAE households with fresh food, quality groceries, and friendly neighborhood service.
            </p>
          </Reveal>

          <ImageReveal className="about-hero-media">
            <SafeImage
              src={heroFresh}
              alt="Fresh produce and organic fruits at Manar Market"
              loading="eager"
            />
          </ImageReveal>

          <div className="about-hero-stats">
            <div className="about-stat-item">
              <strong>Decades</strong>
              <span>Trusted service in the UAE</span>
            </div>
            <div className="about-stat-item">
              <strong>Daily Fresh</strong>
              <span>Produce and dairy daily</span>
            </div>
            <div className="about-stat-item">
              <strong>One Destination</strong>
              <span>Groceries and household needs</span>
            </div>
            <div className="about-stat-item">
              <strong>Family First</strong>
              <span>Attentive customer care</span>
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
                  A Trusted Market for UAE Families
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="about-text-body">
                  <p>
                    Manar Market has grown alongside local communities to deliver everyday groceries and household essentials at honest prices.
                  </p>
                  <p>
                    We focus on fresh food, dependable quality, and convenient shopping for your family's daily needs.
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
            <h2 className="about-section-heading">Standards Behind Everything We Do</h2>
            <p className="about-section-lead">
              Our principles guide how we source products and care for our customers.
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
                <span className="about-eyebrow">Convenience</span>
                <h2 className="about-section-heading">Everything Under One Roof</h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="about-intro-p">
                  Find all your household groceries and daily supplies in one spacious, well-organized market.
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
                <h2 className="about-section-heading">Friendly Service for Every Customer</h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="about-text-body">
                  <p>
                    We are committed to providing clean aisles, well-stocked shelves, and courteous assistance for every shopper.
                  </p>
                </div>

                <div className="about-quote-box">
                  <p>
                    “Quality products, fair prices, and reliable service for every household.”
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
            <h2 className="about-section-heading">Our Daily Standards</h2>
            <p className="about-section-lead">
              Clear standards for freshness, quality, and honest value on every visit.
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
            <span className="about-eyebrow-light">Manar Market</span>
            <h2 className="about-closing-headline">
              Fresh Choices. Honest Value.
            </h2>
            <p className="about-closing-text">
              Visit Manar Market in Ajman for fresh produce, quality groceries, and friendly neighborhood service.
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
                Contact Us
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
