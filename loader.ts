import { sync } from "glob";
import matter from "gray-matter";

export interface PostData {
	postID: string;
	title: string;
	subtitle: string;
	content: string;
	publishedAt: number;
}

type MdFile = { postID: string; contents: string };

const mdToPost = (file: MdFile) => {
	const data = matter(file.contents);

	const post: PostData = {
		postID: file.postID,
		title: data.data.title,
		subtitle: data.data.subtitle,
		content: data.content,
		publishedAt: new Date(data.data.publishedAt).getTime()
	};

	if (!post.title)
		throw new Error(`Post [ ${file.postID} ] is missing field [ title ]`);
	if (!post.content)
		throw new Error(`Post [ ${file.postID} ] is missing field [ content ]`);
	if (!post.publishedAt)
		throw new Error(`Post [ ${file.postID} ] is missing field [ publishedAt ]`);

	return post;
};

const loadMdFile = async (postID: string): Promise<MdFile> => ({
	postID,
	contents: (await import(`./blog/${postID}.md`)).default
});

export const loadPost = async (postID: string) =>
	mdToPost(await loadMdFile(postID));

export const loadAllPosts = async () => {
	const mdPaths = sync(`./blog/*.md`);
	const allPosts = await Promise.all(
		mdPaths.map((path) => loadMdFile(path.slice(path.indexOf("blog/") + 5, -3)))
	);

	return allPosts
		.map(mdToPost)
		.sort((p1, p2) => p2.publishedAt - p1.publishedAt);
};
