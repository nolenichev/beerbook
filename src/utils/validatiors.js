export const required = (value) => {
	if (value) return undefined
	return 'Field is required'
}

export const maxLength = (maxLength) => (value) => {
	if (value.length > maxLength) return 'Tooooooo looooooong'
	return undefined
}
