import Link from "next/link";
import React, { FC } from "react";
import { dashCapitalize } from "../lib/utils";
import styles from "../styles/postcard.module.css";

interface Props {
	blogID: string;
	title?: string;
	index: number;
}

const BlogCard: FC<Props> = ({ blogID, title, index }) => {
	return (
		<Link href={`/blog/${blogID}`}>
			<a>
				<div data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`}>
					<div className={styles["post-card"]}>
						<div className={styles["post-title"]}>
							{title ? title : dashCapitalize(blogID)}
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default BlogCard;
