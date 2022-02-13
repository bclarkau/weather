const getDate = (timestamp: number): Date => (new Date(timestamp * 1000))

export const formatDate = (timestamp: number): string => getDate(timestamp).toLocaleString('en-AU', { weekday: 'short', month: 'short', day: 'numeric' })
export const formatDateLong = (timestamp: number): string => getDate(timestamp).toLocaleString('en-AU', { weekday: 'long', month: 'long', day: 'numeric' })
export const formatTime = (timestamp: number): string => getDate(timestamp).toLocaleString('en-AU', { hour: 'numeric', minute: 'numeric', hour12: true })