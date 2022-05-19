import { ChangeEvent, useState, HTMLInputTypeAttribute } from "react";
import "./App.css";
import Form from "./components/Form";
import FormInput from "./components/FormInput";
import ImagePreview from "./components/ImagePreview";
import { previewImage } from "./utils/previewImage";

import {
	validateEmail,
	validateFile,
	validateName,
	validatePhone,
} from "./utils/validate";

function App() {
	const [data, setData] = useState({
		name: "",
		tel: "",
		email: "",
		file: "",
	});
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(data);
	};

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setData((prevState) => ({ ...prevState, [target.name]: target.value }));
		console.log(data);

		if (target.name === "file") {
			previewImage();
		}
	};

	const validateInput = (name: HTMLInputTypeAttribute, value: string) => {
		switch (name) {
			case "name":
				return validateName(value);
			case "tel":
				return validatePhone(value);
			case "email":
				return validateEmail(value);
			case "file":
				return validateFile();
			default:
				return "";
		}
	};

	const handleImageClose = () => {
		setData((prevState) => ({ ...prevState, file: "" }));
	};

	return (
		<div className="app">
			<Form
				onSubmit={handleSubmit}
			>
				<FormInput
					type="text"
					placeholder="ФИО"
					value={data.name}
					name="name"
					onChange={handleChange}
					validate={validateInput}
				/>
				<FormInput
					type="tel"
					placeholder="Телефон"
					value={data.tel}
					name="tel"
					onChange={handleChange}
					validate={validateInput}
				/>
				<FormInput
					type="email"
					placeholder="Электронная почта"
					value={data.email}
					name="email"
					onChange={handleChange}
					validate={validateInput}
				/>
				<FormInput
					type="file"
					value={data.file}
					name="file"
					onChange={handleChange}
					validate={validateInput}
				/>
				<ImagePreview src={data.file} handleClick={handleImageClose} />
			</Form>
		</div>
	);
}

export default App;
