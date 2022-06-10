import * as React from 'react';
import { useState } from 'react';

const dayName: Record<number, string> = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};

const monthName: Record<number, string> = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const formatDate = (date: Date) => {
  const dayOfWeek = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${dayName[dayOfWeek]}, ${monthName[month]} ${day}, ${year}`;
};

export const Datepicker: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <figure>
      <figcaption>{formatDate(date)}</figcaption>
    </figure>
  );
};
