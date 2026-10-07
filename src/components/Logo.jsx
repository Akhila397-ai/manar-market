import manarMarketLogo from '../assets/logo/manar-market-logo.png';
import manarMarketLogoLight from '../assets/logo/manar-market-logo-light.png';

// Official Manar Market logo component with English + Arabic + Emblem branding
export default function Logo({ variant = 'default', className = '' }) {
  const isLight = variant === 'light';
  const logoSrc = isLight ? manarMarketLogoLight : manarMarketLogo;

  return (
    <a
      href="#home"
      className={`brand-logo-link ${isLight ? 'brand-logo-light' : ''} ${className}`}
      aria-label="Manar Market - Home"
    >
      <img
        src={logoSrc}
        alt="Manar Market منار ماركت"
        className="brand-logo-img"
        width="250"
        height="45"
        loading="eager"
        decoding="async"
      />
    </a>
  );
}
