import matter from "gray-matter";

export interface PostData {
	title: string;
	subtitle: string;
	content: string;
}

const mdToPost = (md: string, postID: string) => {
	const data = matter(md);

	const post: PostData = {
		title: data.data.title,
		subtitle: data.data.subtitle,
		content: data.content
	};

	if (!post.title)
		throw new Error(`Post [ ${postID} ] is missing field [ title ]`);
	if (!post.content)
		throw new Error(`Post [ ${postID} ] is missing field [ content ]`);

	return post;
};

export const loadPost = async (postID: string) => {
	const md = await import(`./md/blog/${postID}.md`);
	return mdToPost(md.default as string, postID);
};
