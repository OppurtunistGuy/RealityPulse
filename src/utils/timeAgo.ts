export function timeAgo(dateString: string | null | undefined): string {
  if (!dateString) return 'just now';
  const date = new Date(dateString);
  const now = new Date();
  const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffSec < 60) return 'just now';
  const minutes = Math.floor(diffSec / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export const SHOW_PREMIERE_DATE = new Date('2026-09-11T00:00:00+05:30');

export function getDynamicShowInfo(nowDate: Date = new Date()) {
  const getISTMidnight = (d: Date) => {
    const istMs = d.getTime() + (5.5 * 60 * 60 * 1000);
    const istDate = new Date(istMs);
    return Date.UTC(istDate.getUTCFullYear(), istDate.getUTCMonth(), istDate.getUTCDate());
  };

  const premiereMidnight = getISTMidnight(SHOW_PREMIERE_DATE);
  const refMidnight = getISTMidnight(nowDate);
  const diffDays = Math.round((refMidnight - premiereMidnight) / (1000 * 60 * 60 * 24));
  const currentDay = Math.max(1, diffDays + 1);
  const currentWeek = Math.floor((currentDay - 1) / 7) + 1;
  return { currentDay, currentWeek };
}
