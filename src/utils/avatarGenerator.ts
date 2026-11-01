// SVG Monogram Avatar Generator
// Replaces stock photos with deterministic, brand-consistent contestant monograms and role accents.

interface AvatarPalette {
  bgStart: string;
  bgEnd: string;
  text: string;
  border: string;
}

const ROLE_PALETTES: Record<string, AvatarPalette> = {
  Frontrunner: {
    bgStart: '#083344',
    bgEnd: '#164e63',
    text: '#67e8f9',
    border: '#06b6d4'
  },
  Challenger: {
    bgStart: '#1e1b4b',
    bgEnd: '#312e81',
    text: '#a5b4fc',
    border: '#6366f1'
  },
  Underdog: {
    bgStart: '#064e3b',
    bgEnd: '#065f46',
    text: '#6ee7b7',
    border: '#10b981'
  },
  Wildcard: {
    bgStart: '#451a03',
    bgEnd: '#78350f',
    text: '#fcd34d',
    border: '#f59e0b'
  },
  Polarizing: {
    bgStart: '#4c0519',
    bgEnd: '#881337',
    text: '#fda4af',
    border: '#f43f5e'
  }
};

const DEFAULT_PALETTE: AvatarPalette = {
  bgStart: '#0f172a',
  bgEnd: '#1e293b',
  text: '#cbd5e1',
  border: '#475569'
};

export function getContestantInitials(name: string, nickname?: string): string {
  if (nickname && nickname.length <= 3 && !nickname.includes(' ')) {
    return nickname.toUpperCase();
  }
  const clean = name.replace(/\([^)]*\)/g, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function generateContestantAvatarSvg(
  name: string,
  role: string = 'Frontrunner',
  nickname?: string
): string {
  const initials = getContestantInitials(name, nickname);
  const palette = ROLE_PALETTES[role] || DEFAULT_PALETTE;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="g_${initials}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.bgStart}" />
      <stop offset="100%" stop-color="${palette.bgEnd}" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#g_${initials})" />
  <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="${palette.border}" stroke-width="2.5" opacity="0.6" />
  <circle cx="86" cy="14" r="5" fill="${palette.border}" />
  <text x="50" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="${initials.length > 2 ? '30' : '36'}" font-weight="800" fill="${palette.text}" text-anchor="middle" dominant-baseline="middle" letter-spacing="1">
    ${initials}
  </text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
