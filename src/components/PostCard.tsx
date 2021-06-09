import Link from "next/link";
import React, { FC } from "react";
import { dashCapitalize } from "../lib/utils";

interface Props {
	blogID: string;
	title?: string;
}

const BlogCard: FC<Props> = ({ blogID, title }) => {
	return (
		<Link href={`/blog/${blogID}`}>
			<a>{title ? title : dashCapitalize(blogID)}</a>
		</Link>
	);
};

export default BlogCard;
