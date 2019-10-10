import byDateWithFallback from "./byDateWithFallback";
import clamp from "./clamp";
import dateDiff from "./dateDiff";
import dateInRange from "./dateInRange";
import dayRange from "./dayRange";
import daysInMonths from "./daysInMonths";
import daysInYear from "./daysInYear";
import displayMonth from "./displayMonth";
import displayTime from "./displayTime";
import endOfDay from "./endOfDay";
import formatDate from "./formatDate";
import formatDateTime from "./formatDateTime";
import formatDisplayDate from "./formatDisplayDate";
import formatDuration from "./formatDuration";
import formatTime from "./formatTime";
import fromDays from "./fromDays";
import fromHours from "./fromHours";
import fromMinutes from "./fromMinutes";
import fromSeconds from "./fromSeconds";
import joinDateTime from "./joinDateTime";
import leapYear from "./leapYear";
import monthNames from "./monthNames";
import offsetByBit from "./offsetByBit";
import parseHourMinutePair from "./parseHourMinutePair";
import splitDateTime from "./splitDateTime";
import startOfDay from "./startOfDay";
import subtractDays from "./subtractDays";
import toDate from "./toDate";
import toDates from "./toDates";
import toDays from "./toDays";
import toHours from "./toHours";
import toISO from "./toISO";
import toISOFromLocalDateTime from "./toISOFromLocalDateTime";
import toLocalDateTime from "./toLocalDateTime";
import toMinutes from "./toMinutes";
import toSeconds from "./toSeconds";
import valid from "./valid";

export {
  byDateWithFallback,
  clamp,
  dateDiff,
  dateInRange,
  dayRange,
  daysInMonths,
  daysInYear,
  displayMonth,
  displayTime,
  endOfDay,
  formatDate,
  formatDateTime,
  formatDisplayDate,
  formatDuration,
  formatTime,
  fromDays,
  fromHours,
  fromMinutes,
  fromSeconds,
  joinDateTime,
  leapYear,
  monthNames,
  offsetByBit,
  parseHourMinutePair,
  splitDateTime,
  startOfDay,
  subtractDays,
  toDate,
  toDates,
  toDays,
  toHours,
  toISO,
  toISOFromLocalDateTime,
  toLocalDateTime,
  toMinutes,
  toSeconds,
  valid
};
declare const _default: {
  byDateWithFallback: (
    now: any
  ) => (
    {
      endedAt: aEnd,
      startedAt: aStart
    }: {
      endedAt: any;
      startedAt: any;
    },
    {
      endedAt: bEnd,
      startedAt: bStart
    }: {
      endedAt: any;
      startedAt: any;
    }
  ) => number;
  clamp: (min: any, max: any) => (dateStringOrDate: any) => Date;
  dateDiff: (a: any, b: any) => number;
  dateInRange: (from: any, to: any) => (date?: Date) => boolean;
  dayRange: ({
    iso,
    local,
    now,
    timezoneOffset
  }: {
    iso?: boolean;
    local?: boolean;
    now?: Date;
    timezoneOffset?: number;
  }) => (date: any) => any[];
  daysInMonths: (leapYear: any) => number[];
  daysInYear: (year: any) => any;
  displayMonth: (monthIndex: any) => string;
  displayTime: (source: any, showSeconds: any) => string;
  endOfDay: (date: any, timezoneOffset?: number, local?: boolean) => Date;
  formatDate: (sourceDate: any, timezoneOffset?: number) => string;
  formatDateTime: (
    sourceDate: any,
    showSeconds?: boolean,
    timezoneOffset?: number
  ) => string;
  formatDisplayDate: (
    sourceDate: any,
    showDay?: boolean,
    timezoneOffset?: number
  ) => string;
  formatDuration: (duration: any, showSeconds?: boolean) => string;
  formatTime: (
    sourceDate: any,
    showSeconds?: boolean,
    timezoneOffset?: number
  ) => string;
  fromDays: (days: any) => number;
  fromHours: (hours: any) => number;
  fromMinutes: (minutes: any) => number;
  fromSeconds: (seconds: any) => number;
  joinDateTime: (...xs: any[]) => string;
  leapYear: (year: any) => boolean;
  monthNames: string[];
  offsetByBit: (date: any) => Date;
  parseHourMinutePair: (text?: string) => number[];
  splitDateTime: (dateTimeString: any) => any;
  startOfDay: (date: any, timezoneOffset?: number, local?: boolean) => Date;
  subtractDays: (sourceDate: any, numberOfDays: any) => Date;
  toDate: (date: any) => string;
  toDates: (xs: any) => any;
  toDays: (milliseconds: any) => number;
  toHours: (milliseconds: any) => number;
  toISO: (x: any) => any;
  toISOFromLocalDateTime: (date: any) => string;
  toLocalDateTime: (date: any, timezoneOffset?: number) => Date;
  toMinutes: (milliseconds: any) => number;
  toSeconds: (milliseconds: any) => number;
  valid: (date: any) => boolean;
};

export default _default;
