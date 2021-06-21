import Link from "next/link";
import React, { FC } from "react";
import { PostData } from "../../loader";
import styles from "../styles/postcard.module.css";

interface Props {
	post: PostData;
	index: number;
}

const BlogCard: FC<Props> = ({ post, index }) => {
	const date = new Date(post.publishedAt);

	return (
		<Link href={`/blog/${post.postID}`}>
			<a>
				<div data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`}>
					<div className={styles["post-card"]}>
						<div className={styles["post-title"]}>{post.title}</div>
						<div className={styles["post-date"]}>
							<span>{`${
								date.getMonth() + 1
							}/${date.getDate()}/${date.getFullYear()}`}</span>
						</div>
						<div className={styles["post-subtitle"]}>{post.subtitle}</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default BlogCard;
