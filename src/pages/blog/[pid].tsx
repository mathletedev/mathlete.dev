import { sync } from "glob";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { loadPost, PostData } from "../../../loader";
import styles from "../../styles/blog.module.css";

interface Props {
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
			post
		}
	};
};

const components = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");

		return !inline && match ? (
			<SyntaxHighlighter
				style={theme}
				language={match[1]}
				showLineNumbers
				{...props}
			>
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	}
};

const BlogPage: FC<Props> = ({ post }) => {
	return (
		<div id="center">
			<div id={styles.title}>{post.title}</div>
			<div id={styles.subtitle}>{post.subtitle}</div>
			<ReactMarkdown
				className={styles.markdown}
				// @ts-expect-error
				components={components}
				linkTarget="_blank"
			>
				{post.content}
			</ReactMarkdown>
			<div id={styles.extra}></div>
		</div>
	);
};

export default BlogPage;
