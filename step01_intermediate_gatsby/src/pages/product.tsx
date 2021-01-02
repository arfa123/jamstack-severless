import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Product1 from "../components/product1";
import Product2 from "../components/product2";
import Main from "../components/main";
import { Link } from "gatsby";

const Product = () => {
	return (
		<Layout>
			<h1>See Products</h1>
			<div>
				<Link to="/product/page1">Product 1</Link>
				<br />
				<Link to="/product/page2">Product 2</Link>
			</div>
			<Router basepath="/product">
				<Product1 path="/page1" />
				<Product2 path="/page2" />
				<Main path="/" />
			</Router>
		</Layout>
	);
};

export default Product;