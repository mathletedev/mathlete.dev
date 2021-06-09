import { sync } from "glob";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC, Fragment } from "react";
import ReactMarkdown from "react-markdown";
import { loadPost, PostData } from "../../../loader";

interface Props {
	postID: string;
	post: PostData;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = sync("./md/blog/*.md");
	const paths = posts.map(
		(post) => `/blog/${post.split("/").pop().slice(0, -3)}`
	);

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const postID = context.params.pid as string;
	const post = await loadPost(postID);

	return {
		props: {
			postID,
			post
		}
	};
};

const BlogPage: FC<Props> = ({ postID, post }) => {
	return (
		<Fragment>
			<h1>{post.title}</h1>
			<h2>{post.subtitle}</h2>
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</Fragment>
	);
};

export default BlogPage;
