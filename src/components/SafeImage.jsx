import { useState } from 'react';

// Fallback image asset or SVG data URI with subtle branded watermark
const FALLBACK_PLACEHOLDER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2303394D"/><stop offset="100%" stop-color="%231EA844"/></linearGradient></defs><rect width="800" height="600" fill="url(%23bg)"/><g fill="none" stroke="%23ffffff" stroke-opacity="0.25" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" transform="translate(360, 260)"><path d="M0 60 V28 a20 20 0 0 1 40 0 a20 20 0 0 1 40 0 v32"/></g><text x="400" y="370" fill="%23ffffff" fill-opacity="0.6" font-family="system-ui, sans-serif" font-size="16" font-weight="600" text-anchor="middle" letter-spacing="2">MANAR MARKET</text></svg>`;

export default function SafeImage({
  src,
  alt = '',
  className = 'safe-img',
  loading = 'lazy',
  style,
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const finalSrc = hasError || !src ? FALLBACK_PLACEHOLDER : src;

  return (
    <div className="safe-img-wrapper" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...style }}>
      <img
        className={`${className} ${loaded ? 'is-loaded' : 'is-loading'}`}
        src={finalSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          if (!hasError) {
            setHasError(true);
            e.currentTarget.src = FALLBACK_PLACEHOLDER;
          }
        }}
        {...props}
      />
    </div>
  );
}
