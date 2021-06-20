import { sync } from "glob";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { loadPost, PostData } from "../../../loader";
import styles from "../../styles/blog.module.css";

interface Props {
	postID: string;
	post: PostData;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = sync("./blog/*.md");
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
		<div id="center">
			<div id={styles.title}>{post.title}</div>
			<div id={styles.subtitle}>{post.subtitle}</div>
			<ReactMarkdown className={styles.markdown} linkTarget="_blank">
				{post.content}
			</ReactMarkdown>
		</div>
	);
};

export default BlogPage;
