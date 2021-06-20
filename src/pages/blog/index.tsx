import { GetStaticProps } from "next";
import React, { FC } from "react";
import { loadAllPosts, PostData } from "../../../loader";
import PostCard from "../../components/PostCard";
import styles from "../../styles/blog.module.css";

interface Props {
	posts: PostData[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const posts = await loadAllPosts();

	return {
		props: {
			posts
		}
	};
};

const Blog: FC<Props> = ({ posts }) => {
	return (
		<div id="center">
			<div id={styles.title} className="unselectable">
				Blog
			</div>
			{posts &&
				posts.map((post, i) => (
					<PostCard post={post} index={i} key={post.postID} />
				))}
			<div id={styles.extra}></div>
		</div>
	);
};

export default Blog;
