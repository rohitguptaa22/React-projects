import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ value }) => {
	const productId = useParams();
	return (
		<>
			<h1>{value}</h1>
		</>
	);
};

export default Product;
