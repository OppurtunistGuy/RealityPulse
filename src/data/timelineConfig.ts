/**
 * ============================================================================
 * BIGG BOSS 20 (2026) — TIME & TIMELINE CONFIGURATION
 * ============================================================================
 * 
 * 🔒 SINGLE SOURCE OF TRUTH FOR TIME:
 * Premiere Date: September 06, 2026 at 00:00:00 IST (Asia/Kolkata).
 * Day Calculation: Day = (Today - Premiere Date) + 1.
 * Week Calculation: Week = Math.floor((Day - 1) / 7) + 1.
 * 
 * On November 01, 2026 IST:
 * Diff = 56 calendar days -> Day 57, Week 9.
 * ============================================================================
 */

export const SHOW_PREMIERE_DATE = new Date('2026-09-06T00:00:00+05:30');

export interface ShowTimeline {
  currentDay: number;
  currentWeek: number;
  premiereDate: string;
  daysRemaining: number;
}

export function calculateShowTimeline(referenceDate: Date = new Date()): ShowTimeline {
  // Calendar day calculation in Asia/Kolkata (IST) timezone (+05:30)
  const getISTMidnight = (d: Date) => {
    const istMs = d.getTime() + 5.5 * 60 * 60 * 1000;
    const istDate = new Date(istMs);
    return Date.UTC(istDate.getUTCFullYear(), istDate.getUTCMonth(), istDate.getUTCDate());
  };

  const premiereMidnight = getISTMidnight(SHOW_PREMIERE_DATE);
  const refMidnight = getISTMidnight(referenceDate);
  const diffDays = Math.round((refMidnight - premiereMidnight) / (1000 * 60 * 60 * 24));
  const currentDay = Math.max(1, diffDays + 1);
  const currentWeek = Math.floor((currentDay - 1) / 7) + 1;
  const daysRemaining = Math.max(0, 105 - currentDay); // Standard 15-week (105-day) season

  return {
    currentDay,
    currentWeek,
    premiereDate: SHOW_PREMIERE_DATE.toISOString(),
    daysRemaining
  };
}

export function getDynamicShowInfo(referenceDate: Date = new Date()) {
  const { currentDay, currentWeek } = calculateShowTimeline(referenceDate);
  return { currentDay, currentWeek };
}

