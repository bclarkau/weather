
// convert timestamp to readable date 
export const formatDate = (timestamp: number): string => {
	const date = new Date(timestamp * 1000)
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	return `${day}/${month}/${year}`
}

// convert timestamp to readable time with am/pm
export const formatTime = (timestamp: number): string => {
	const date = new Date(timestamp * 1000)
	const hours = date.getHours()
	const ampm = hours >= 12 ? 'pm' : 'am'
	const hour = hours % 12
	return `${hour}${ampm}`
}