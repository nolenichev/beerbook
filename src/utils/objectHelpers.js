const uptadeObjectInArray = (
	items,
	itemId,
	objectPropsName,
	newObjectProps
) => {
	return items.map((item) => {
		if (item[objectPropsName] === itemId) {
			return { ...item, ...newObjectProps }
		}
		return item
	})
}

export default uptadeObjectInArray
