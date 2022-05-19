import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface inputProps {
	type: HTMLInputTypeAttribute;
	placeholder?: HTMLInputTypeAttribute;
	value: HTMLInputTypeAttribute;
	name: HTMLInputTypeAttribute;
	onChange: ChangeEventHandler<HTMLInputElement>;
	validate?: any;
}

const FormInput = ({
	type,
	placeholder,
	name,
	value,
	onChange,
	validate,
}: inputProps) => {
	return (
		<>
			<input
				type={type}
				required
				className={type === "file" ? "file-input" : "form-input"}
				placeholder={placeholder}
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				multiple
				accept=".png,.jpeg"
			/>
			{type === "file" ? (
				<>
					<label htmlFor={type}>{value ? "" : "выберите файл"}</label>
				</>
			) : (
				""
			)}

			<div className="error-input">{validate(name, value)}</div>
		</>
	);
};

export default FormInput;
