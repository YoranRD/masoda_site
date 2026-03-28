const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

const timeFormatter = new Intl.DateTimeFormat("fr-FR", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});

export const formatDateFrench = (value: Date): string => dateFormatter.format(value);

export const formatDateRangeFrench = (start: Date, end: Date): string => {
  const sameDay = start.toDateString() === end.toDateString();
  if (sameDay) {
    return `${formatDateFrench(start)} · ${timeFormatter.format(start)}–${timeFormatter.format(end)}`;
  }

  return `${formatDateFrench(start)} · ${timeFormatter.format(start)} → ${formatDateFrench(end)} · ${timeFormatter.format(end)}`;
};

