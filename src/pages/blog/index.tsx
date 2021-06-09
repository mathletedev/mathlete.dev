import React, { FC, Fragment } from "react";
import BlogCard from "../../components/PostCard";

const Blog: FC = () => {
	return (
		<Fragment>
			<h1>Blog</h1>
			<BlogCard blogID="hello" />
		</Fragment>
	);
};

export default Blog;
