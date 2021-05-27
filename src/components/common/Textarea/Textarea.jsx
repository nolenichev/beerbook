import React from 'react'

const FormControl = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error

	return (
		<div className={hasError ? 'errorInput' : null}>
			{props.children}
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export const Textarea = (props) => {
	const { input, meta, ...restProps } = props
	return (
		<FormControl {...props}>
			<textarea {...restProps} {...input} />
		</FormControl>
	)
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props
	return (
		<FormControl {...props}>
			<input {...restProps} {...input} />
		</FormControl>
	)
}
