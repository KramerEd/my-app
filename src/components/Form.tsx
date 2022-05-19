import React from "react";

interface Props {
	children: React.ReactNode;
	onSubmit: React.ReactEventHandler;
}

const Form = ({ children, ...props }: Props) => {
	return (
		<form {...props}>
			<header>Свяжитесь с нами!</header>
			{children}
			<button type="submit">Отправить</button>
		</form>
	);
};

export default Form;
