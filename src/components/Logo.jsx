import madinaMartLogo from '../assets/logo/madina-mart-logo.webp';
import madinaMartLogoLight from '../assets/logo/madina-mart-logo-1.png';

// Official Madina Mart logo component
export default function Logo({ variant = 'default', className = '' }) {
  const isLight = variant === 'light';
  const logoSrc = isLight ? madinaMartLogoLight : madinaMartLogo;

  return (
    <a
      href="#home"
      className={`brand-logo-link ${isLight ? 'brand-logo-light' : ''} ${className}`}
      aria-label="Madina Mart - Home"
    >
      <img
        src={logoSrc}
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
