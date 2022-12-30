import _ from 'lodash';
import moment, {type  Moment } from 'moment';

const FORMAT_ISO = 'dddd, DD-MM-YYYY';
const FORMAT_US_DATE = 'YYYY-MM-DD';

const FORMAT_FULL_VI = 'Do MMMM  YYYY, hh:mm a';
const FORMAT_FULL_EN = ' MMMM Do  YYYY, hh:mm a';
// Convert day to number 
// export function convertDayToNumber(day: string): number {
//     return parseInt(day.split("/")[0]);
// }
export function getToday(): string {
  return moment().format(FORMAT_ISO);
}

export function normalizeDate(date: string): string {
  return moment(date, FORMAT_US_DATE).format(FORMAT_ISO);
}
export function dayFrom(day1: string): number {
  const today = moment(getToday(), FORMAT_ISO);
  const dayCompared: Moment = moment(day1, FORMAT_ISO);

  const day = dayCompared.diff(today, 'days');
  return day;
}
export function convertDayToNumber(day: string): string {
  return day.valueOf();
}

export function getRelativeDay(numOfDay: number): string {
  // switch
  switch (numOfDay) {
    case 0:
      return 'Today';
    case 1:
      return 'Tomorrow';
    case -1:
      return 'Yesterday';
    default:
      return '';
  }
}

export function sortByDay(day1: any[]) {
  return _.sortBy(day1, [
    function (o) {
      return o.timeStamp;
    }
  ]);
}

export function toTimeStamp(day1: string): number {
  return moment(day1, FORMAT_ISO).unix();
}


export const standardizeMoment = (
  date: any,
  locale = 'en',
  zone: number= -1,
  format = FORMAT_FULL_EN
) => {
  return getExactTime(date, zone).locale(locale).format(format);
};

export const standardizeDate = (date: any, locale = 'en', zone = null) => {
  console.log("🚀 ~ file: date.helpers.ts:68 ~ standardizeDate ~ date", date);
  const format = locale === 'en' ? FORMAT_FULL_EN : FORMAT_FULL_VI;
  const day = !zone
      ? moment.unix(date).format(format)
      : standardizeMoment(date, locale, zone, format);

  return day;
};
export const getHours = (date: any, locale: any, zone?: number) => {
  return standardizeMoment(date, locale, zone, 'h:mm a');
};

export const getExactTime = (date: any, zone: number) => {
  return moment.unix(date).utcOffset(zone / 60);
};

export const localTime = (date: any) => {
  return moment.utc(date).unix();
};

export const handleTimeZone = (date: any, zone: any) => {
  return date - zone;
};