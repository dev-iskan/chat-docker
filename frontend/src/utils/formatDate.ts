import { format, isValid, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'

export const formatDate = (_date: string, _format: string = 'dd MMM yyyy'): string => {
  const parsedDate = parseISO(_date)
  let formattedDate
  if (isValid(parsedDate)) {
    formattedDate = format(parsedDate, _format, {
      locale: ru
    })
  } else {
    try {
      formattedDate = format(new Date(_date), _format, {
        locale: ru
      })
    } catch {
      formattedDate = _date
    }
  }
  return formattedDate
}
