import { formatDate, formatDateLong, formatTime } from '.'

const date = 1643673600

test('formatDate returns a readable date string', () => {
	expect(formatDate(date)).toBe('Tue, 1 Feb')
})

test('formatDateLong returns a readable date string', () => {
	expect(formatDateLong(date)).toBe('Tuesday, 1 February')
})

test('formatTime returns a readable time string', () => {
	expect(formatTime(date)).toBe('11:00 am')
})