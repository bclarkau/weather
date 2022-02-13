import { formatCelcius } from '.'

test('formatCelcius returns a rounded, readable temperature string', () => {
	expect(formatCelcius(10)).toBe('10°C')
	expect(formatCelcius(12.4)).toBe('12°C')
	expect(formatCelcius(15.5)).toBe('16°C')
})