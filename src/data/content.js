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
    imageAlt: 'Vibrant organic fruits and fresh vegetables displayed in modern supermarket',
    eyebrow: 'Fresh Produce Everyday',
    title: 'Fresh Selections for Your Daily Table.',
    description: 'Farm-fresh fruits, crisp vegetables and seasonal produce chosen to bring vitality and colour to every meal.',
    primaryAction: 'Explore Our Products',
    secondaryAction: 'Visit Manar Market',
  },
  {
    id: 'grocery-essentials',
    image: heroGroceries,
    imageAlt: 'Premium grocery shelves with pantry staples, oils and gourmet essentials',
    eyebrow: 'Everyday Essentials, Better',
    title: 'Everything You Need, All in One Place.',
    description: 'Discover quality groceries, wholesome staples, pantry favourites and everyday cooking essentials at Manar Market.',
    primaryAction: 'Explore Our Products',
    secondaryAction: 'Visit Manar Market',
  },
  {
    id: 'refreshing-beverages',
    image: heroBeverages,
    imageAlt: 'Refreshing chilled beverages, fresh juices and mineral water bottles',
    eyebrow: 'Beverages & Drinks',
    title: 'Refreshing Choices for Every Moment.',
    description: 'From natural fruit juices to chilled refreshments and everyday drinks, find your favourites in one convenient place.',
    primaryAction: 'Explore Our Products',
    secondaryAction: 'Visit Manar Market',
  },
  {
    id: 'household-care',
    image: heroHousehold,
    imageAlt: 'Clean modern household essentials, detergents and home care products',
    eyebrow: 'Household Essentials',
    title: 'Your Home, Thoughtfully Stocked.',
    description: 'Quality cleaning supplies, paper goods, laundry essentials and home care products to keep your home running smoothly.',
    primaryAction: 'Explore Our Products',
    secondaryAction: 'Visit Manar Market',
  },
  {
    id: 'everyday-shopping',
    image: heroStaples,
    imageAlt: 'Bright modern supermarket aisle stocked with grocery favorites',
    eyebrow: 'Convenient Everyday Shopping',
    title: 'The Trusted Market in Your Neighborhood.',
    description: 'Thoughtfully curated products, friendly service and unbeatable convenience close to home in Ajman.',
    primaryAction: 'Explore Our Products',
    secondaryAction: 'Visit Manar Market',
  },
];

export const categories = [
  {
    id: 'fresh',
    title: 'Fresh Food',
    description: 'Fresh fruits, vegetables and wholesome produce daily.',
    image: catFresh,
  },
  {
    id: 'groceries',
    title: 'Groceries',
    description: 'Pantry staples, grains, oils and everyday cooking essentials.',
    image: catGroceries,
  },
  {
    id: 'beverages',
    title: 'Beverages',
    description: 'Fresh fruit juices, mineral water and refreshing drinks.',
    image: catBeverages,
  },
  {
    id: 'household',
    title: 'Household',
    description: 'Home cleaning supplies, laundry care and household paper.',
    image: catHousehold,
  },
  {
    id: 'personal-care',
    title: 'Personal Care',
    description: 'Everyday bath, hygiene and self-care essentials for the family.',
    image: catPersonalCare,
  },
  {
    id: 'snacks',
    title: 'Snacks & Confectionery',
    description: 'Chocolates, biscuits, nuts and delicious treats on the go.',
    image: catSnacks,
  },
];

export const products = [
  {
    id: 'milk',
    name: 'Fresh Milk',
    category: 'Dairy',
    detail: 'Chilled and wholesome for your daily breakfast routine.',
    image: productMilk,
  },
  {
    id: 'rice',
    name: 'Premium Rice',
    category: 'Groceries',
    detail: 'Fragrant long-grain basmati rice for everyday family meals.',
    image: productRice,
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    category: 'Fresh Food',
    detail: 'Crisp seasonal fruits handpicked for wholesome snacking.',
    image: productFruits,
  },
  {
    id: 'juices',
    name: 'Fresh Juices',
    category: 'Beverages',
    detail: 'Pure natural juices packed with refreshing flavor.',
    image: productJuices,
  },
  {
    id: 'snacks',
    name: 'Artisan Snacks',
    category: 'Snacks & Confectionery',
    detail: 'Delicious sweet and savoury treats for every break.',
    image: productSnacks,
  },
  {
    id: 'household',
    name: 'Household Essentials',
    category: 'Household',
    detail: 'Effective surface cleaners and everyday home care staples.',
    image: productHousehold,
  },
];

export const staticImages = {
  about: aboutImg,
  cta: ctaImg,
};

export const whyUs = [
  { icon: 'award', title: 'Quality Essentials', text: 'A carefully considered range of everyday products you can rely on.' },
  { icon: 'leaf', title: 'Fresh Selection', text: 'Fresh food and produce chosen to make every meal a little better.' },
  { icon: 'clock', title: 'Everyday Convenience', text: 'Everything you need in one place, so your shopping stays simple.' },
  { icon: 'heart', title: 'Friendly Shopping Experience', text: 'A welcoming store and team that make every visit pleasant.' },
];
