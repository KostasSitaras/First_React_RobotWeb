export function getChapterSnapTarget(ranges, position, gestureStart, direction, viewport) {
  const aligned = ranges.flatMap(({ top, bottom }) => [top, bottom])
    .find((target) => Math.abs(target - position) < 2);
  if (aligned !== undefined) return aligned;

  // Tall chapters keep a freely scrollable reading area.
  if (ranges.some(({ top, bottom }) => bottom > top + 2 && position >= top && position <= bottom)) {
    return position;
  }

  const threshold = Math.max(24, Math.min(56, viewport * 0.06));
  if (direction && (position - gestureStart) * direction >= threshold) {
    const candidates = ranges
      .map(({ top, bottom }) => direction > 0 ? top : bottom)
      .filter((target) => (target - position) * direction > 2);
    if (candidates.length) return direction > 0 ? Math.min(...candidates) : Math.max(...candidates);
  }

  const targets = ranges.flatMap(({ top, bottom }) => [top, bottom]);
  const nearest = targets.reduce((best, target) => (
    Math.abs(target - position) < Math.abs(best - position) ? target : best
  ), targets[0] ?? position);
  return Math.abs(nearest - position) <= viewport * 0.32 ? nearest : position;
}
