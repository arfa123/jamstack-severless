var path = require("path");

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	const result = await graphql(`
	{
		allContentfulElectronics {
			nodes {
				slug
				title
				desc {
					raw
				}
			}
		}
	}
	`);

	result.data.allContentfulElectronics.nodes.forEach((obj) => {
		createPage({
			path: `/product/${obj.slug}`,
			component: path.resolve("./src/templates/product.tsx"),
			context: {
				itemDetails: obj
			}
		})
	});
};