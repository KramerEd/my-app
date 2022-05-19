export const validateName = (name: string) => {
	if (name.trim().length <= 6) {
		return "Имя должно содержать более 6 символов";
	} else if (name.trim().match(/\d/)) {
		return "Имя не должно содержать чисел";
	}
};
export const validatePhone = (phone: string) => {
	if (
		!phone
			.trim()
			.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
	) {
		return "Введите корректный номер телефона";
	}
};

export const validateEmail = (email: string) => {
	if (!email.trim().match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
		return "Введите кореектный email";
	}
};
export const validateFile = () => {
	//@ts-expect-error
	if (!document.querySelector(".file-input")?.files?.length) {
		return "Вам нужно выбрать файл";
	}
};
