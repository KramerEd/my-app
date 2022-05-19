export const previewImage = () => {
	const image = document.querySelector(".file-input");
	//@ts-expect-error
	if (image.files.length) {
		const fileReader = new FileReader();
		fileReader.onload = (e) => {
			document
				.querySelector(".image-preview")
				//@ts-expect-error
				?.setAttribute("src", e.target?.result);
		};
		//@ts-expect-error
		fileReader.readAsDataURL(image.files[0]);
		//@ts-expect-error
		document.querySelector("label").classList.add("disabled");
		console.log(image);
	}
};
