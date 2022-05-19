import React from "react";

const ImagePreview = ({ src, handleClick }: any) => {
	return (
		<div className="image-container">
			<span onClick={handleClick}>X</span>
			<img src={src} alt="imagepreview" className="image-preview" />
		</div>
	);
};

export default ImagePreview;
