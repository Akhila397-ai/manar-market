import manarMarketLogo from '../assets/logo/manar-market-logo.png';
import manarMarketLogoLight from '../assets/logo/manar-market-logo-light.png';

export default function Logo({
  variant = 'default',
  className = '',
}) {
  const isLight = variant === 'light';

  const logoSrc = isLight
    ? manarMarketLogoLight
    : manarMarketLogo;

  return (
    <a
      href="#home"
      className={`brand-logo-link ${
        isLight ? 'brand-logo-light' : ''
      } ${className}`.trim()}
      aria-label="Manar Market - Home"
    >
      <img
        src={logoSrc}
        alt="Manar Market"
        className="brand-logo-img"
        width="1024"
        height="113"
        loading="eager"
        decoding="async"
      />
    </a>
  );
}