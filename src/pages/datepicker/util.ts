import { monthDays} from './constant';

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

export const formatDate = (date: Date) => {
  const dayOfWeek = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  return `${dayName[dayOfWeek]}, ${monthName[month]} ${day}`;
};

export const isLeapYear = (year: number) => {
  if (year % 100 === 0) return year % 400 === 0;
  return year % 4 === 0;
};

export const dateToAngle = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const leapYear = isLeapYear(year);

  // calculate number of days since Jan 1
  let numOfDays = 0;
  for (let i = 0; i < month; i++) {
    if (i === 1 && leapYear) {
      numOfDays += 28;
    } else {
      numOfDays += monthDays[i];
    }
  }
  numOfDays += day;

  const totalDays = leapYear ? 366 : 365;
  return 360 * (numOfDays / totalDays);
};

export const angleToDate = (angle: number) => {
  while (angle > 360) angle -= 360;
  const date = new Date();
  let numOfDays = Math.floor(365 * angle / 360);
  if (numOfDays < 1) return date;
  for (let i = 0; i < 12; i++) {
    if (numOfDays < monthDays[i]) {
      date.setMonth(i);
      date.setDate(numOfDays);
      return date;
    }
    numOfDays -= monthDays[i];
  }
  throw new RangeError('Number of days out of range');
};

export default () => {};