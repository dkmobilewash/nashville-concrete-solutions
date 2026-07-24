export interface HoursRule {
  /** Full schema.org day names, in display order. */
  days: string[];
  /** 24-hour "HH:MM" */
  opens: string;
  /** 24-hour "HH:MM" */
  closes: string;
}

const dayAbbreviations: Record<string, string> = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

function to12Hour(time: string): string {
  const [hourStr, minuteStr] = time.split(":");
  const hour24 = parseInt(hourStr, 10);
  const period = hour24 >= 12 ? "pm" : "am";
  const hour12 = hour24 % 12 || 12;
  return minuteStr === "00" ? `${hour12}${period}` : `${hour12}:${minuteStr}${period}`;
}

function formatDays(days: string[]): string {
  if (days.length === 1) return dayAbbreviations[days[0]] ?? days[0];
  return `${dayAbbreviations[days[0]] ?? days[0]}–${dayAbbreviations[days[days.length - 1]] ?? days[days.length - 1]}`;
}

export function formatHoursRule(rule: HoursRule): string {
  return `${formatDays(rule.days)}: ${to12Hour(rule.opens)}–${to12Hour(rule.closes)}`;
}

export function formatHours(rules: HoursRule[] | null): string | null {
  if (!rules || rules.length === 0) return null;
  return rules.map(formatHoursRule).join(", ");
}
