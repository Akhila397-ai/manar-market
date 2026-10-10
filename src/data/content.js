// All website content lives here with local imported assets.
import heroFresh from '../assets/images/hero/hero-fresh.webp';
import heroGroceries from '../assets/images/hero/hero-groceries.webp';
import heroBeverages from '../assets/images/hero/hero-beverages.webp';
import heroHousehold from '../assets/images/hero/hero-household.webp';
import heroStaples from '../assets/images/hero/hero-staples.webp';

import catFresh from '../assets/images/categories/cat-fresh.webp';
import catGroceries from '../assets/images/categories/cat-groceries.webp';
import catBeverages from '../assets/images/categories/cat-beverages.webp';
import catHousehold from '../assets/images/categories/cat-household.webp';
import catPersonalCare from '../assets/images/categories/cat-personal-care.webp';
import catSnacks from '../assets/images/categories/cat-snacks.webp';

import productMilk from '../assets/images/products/milk.webp';
import productRice from '../assets/images/products/rice.webp';
import productFruits from '../assets/images/products/fruits.webp';
import productJuices from '../assets/images/products/juices.webp';
import productSnacks from '../assets/images/products/snacks.webp';
import productHousehold from '../assets/images/products/household.webp';

import aboutImg from '../assets/images/about/about.webp';
import ctaImg from '../assets/images/cta/cta.webp';

export const company = {
  name: 'Manar Market',
  address: 'Industrial 2, Ajman, UAE',
  phone: '067491880',
  phoneRaw: '067491880',
  email: 'info@manarmarket.ae',
  website: 'www.manarmarket.ae',
  websiteUrl: 'https://www.manarmarket.ae',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Popular', href: '#popular' },
  { label: 'Our Stores', href: '#stores' },
  { label: 'Contact', href: '#contact' },
];

export const heroSlides = [
  {
    id: 'fresh-produce',
    image: heroFresh,
    imageAlt: 'Fresh fruits and vegetables displayed in supermarket',
    eyebrow: 'Fresh Produce',
    title: 'Fresh Produce for Your Table.',
    description: 'Farm-fresh fruits, vegetables, and daily essentials sourced for your kitchen.',
    primaryAction: 'Explore Products',
    secondaryAction: 'Visit Store',
  },
  {
    id: 'grocery-essentials',
    image: heroGroceries,
    imageAlt: 'Grocery shelves with pantry staples and essentials',
    eyebrow: 'Groceries',
    title: 'Everything You Need in One Place.',
    description: 'Pantry staples, quality groceries, and everyday household items.',
    primaryAction: 'Explore Products',
    secondaryAction: 'Visit Store',
  },
  {
    id: 'refreshing-beverages',
    image: heroBeverages,
    imageAlt: 'Chilled beverages, juices, and mineral water',
    eyebrow: 'Beverages',
    title: 'Refreshing Choices Every Day.',
    description: 'Natural juices, water, and chilled drinks for the family.',
    primaryAction: 'Explore Products',
    secondaryAction: 'Visit Store',
  },
  {
    id: 'household-care',
    image: heroHousehold,
    imageAlt: 'Household essentials, detergents, and home care products',
    eyebrow: 'Household',
    title: 'Your Home, Thoughtfully Stocked.',
    description: 'Trusted cleaning supplies, detergents, and home care essentials.',
    primaryAction: 'Explore Products',
    secondaryAction: 'Visit Store',
  },
  {
    id: 'everyday-shopping',
    image: heroStaples,
    imageAlt: 'Supermarket aisle stocked with grocery favorites',
    eyebrow: 'Daily Shopping',
    title: 'Your Trusted Neighborhood Market.',
    description: 'Friendly service and everyday value in Industrial 2, Ajman.',
    primaryAction: 'Explore Products',
    secondaryAction: 'Visit Store',
  },
];

export const categories = [
  {
    id: 'fresh',
    title: 'Fresh Food',
    description: 'Fresh fruits and vegetables daily.',
    image: catFresh,
  },
  {
    id: 'groceries',
    title: 'Groceries',
    description: 'Pantry staples and cooking essentials.',
    image: catGroceries,
  },
  {
    id: 'beverages',
    title: 'Beverages',
    description: 'Juices, water, and chilled drinks.',
    image: catBeverages,
  },
  {
    id: 'household',
    title: 'Household',
    description: 'Cleaning products and home essentials.',
    image: catHousehold,
  },
  {
    id: 'personal-care',
    title: 'Personal Care',
    description: 'Everyday hygiene and wellness items.',
    image: catPersonalCare,
  },
  {
    id: 'snacks',
    title: 'Snacks & Confectionery',
    description: 'Biscuits, nuts, and quick snacks.',
    image: catSnacks,
  },
];

export const products = [
  {
    id: 'milk',
    name: 'Fresh Milk',
    category: 'Dairy',
    detail: 'Fresh milk for your daily morning routine.',
    image: productMilk,
  },
  {
    id: 'rice',
    name: 'Premium Rice',
    category: 'Groceries',
    detail: 'Quality basmati rice for family meals.',
    image: productRice,
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    category: 'Fresh Food',
    detail: 'Crisp seasonal fruits handpicked daily.',
    image: productFruits,
  },
  {
    id: 'juices',
    name: 'Fresh Juices',
    category: 'Beverages',
    detail: 'Pure fruit juices with natural flavor.',
    image: productJuices,
  },
  {
    id: 'snacks',
    name: 'Artisan Snacks',
    category: 'Snacks & Confectionery',
    detail: 'Sweet and savoury snacks for quick breaks.',
    image: productSnacks,
  },
  {
    id: 'household',
    name: 'Household Essentials',
    category: 'Household',
    detail: 'Effective surface cleaners and home care essentials.',
    image: productHousehold,
  },
];

export const staticImages = {
  about: aboutImg,
  cta: ctaImg,
};

export const whyUs = [
  { icon: 'award', title: 'Quality Essentials', text: 'Reliable products chosen for consistent quality and value.' },
  { icon: 'leaf', title: 'Fresh Daily', text: 'Fresh produce and dairy delivered every day.' },
  { icon: 'clock', title: 'Convenient Store', text: 'All your groceries and home essentials in one easy location.' },
  { icon: 'heart', title: 'Friendly Service', text: 'Helpful staff committed to a smooth shopping experience.' },
];
