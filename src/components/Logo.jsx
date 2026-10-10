import madinaMartLogo from '../assets/logo/madina-mart-logo.webp';

// Official Madina Mart logo component
export default function Logo({ variant = 'default', className = '' }) {
  const isLight = variant === 'light';

  return (
    <a
      href="#home"
      className={`brand-logo-link ${isLight ? 'brand-logo-light' : ''} ${className}`}
      aria-label="Madina Mart - Home"
    >
      <img
        src={madinaMartLogo}
        alt="Madina Mart"
        className="brand-logo-img"
        width="1024"
        height="151"
        loading="eager"
        decoding="async"
      />
    </a>
  );
}
