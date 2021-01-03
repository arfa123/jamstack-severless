import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

const Product = ({ data: { allContentfulElectronics: { nodes } } }) => {

	return (
		<Layout>
			<h1>List of Electronics Products</h1>
			<div>
				{nodes.map((item) => (
					<div key={item.slug}>
						<Link to={`/product/${item.slug}`}>{item.title}</Link>
						<br />
					</div>
				))}
			</div>
		</Layout>
	);
};

export const query = graphql`
	query MyQuery {
		allContentfulElectronics {
			nodes {
				title
				slug
				desc {
					raw
				}
			}
		}
	}
`;

export default Product;