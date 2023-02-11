import { DateTimeFormatOptions } from './dateTimeFormatOptions.type'

export function formatDate(date: Date, options: DateTimeFormatOptions = {}, location: string = 'fr') {
  return new Intl.DateTimeFormat(location, options).format(date)
}

export function getTime(date: Date, options: DateTimeFormatOptions = {}, location: string = 'fr') {
  return new Intl.DateTimeFormat(location, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    ...options,
  }).format(date)
}

interface GetDateType {
  years?: number
  month?: number
  days?: number
  hours?: number
  minutes?: number
}

export function getDate({
  years = 0,
  month = 0,
  days = 0,

  hours = 0,
  minutes = 0,
}: GetDateType) {
  const date = new Date()
  if (years) {
    date.setFullYear(date.getFullYear() + years)
  }
  if (month) {
    date.setMonth(date.getMonth() + month)
  }
  if (days) {
    date.setDate(date.getDate() + days)
  }
  if (hours) {
    date.setHours(date.getHours() + hours)
  }
  if (minutes) {
    date.setMinutes(date.getMinutes() + minutes)
  }
  return date
}
