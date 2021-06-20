import { sync } from "glob";
import matter from "gray-matter";

export interface PostData {
	postID: string;
	title: string;
	subtitle: string;
	content: string;
}

type MdFile = { postID: string; contents: string };

const mdToPost = (file: MdFile) => {
	const data = matter(file.contents);

	const post: PostData = {
		postID: file.postID,
		title: data.data.title,
		subtitle: data.data.subtitle,
		content: data.content
	};

	if (!post.title)
		throw new Error(`Post [ ${file.postID} ] is missing field [ title ]`);
	if (!post.content)
		throw new Error(`Post [ ${file.postID} ] is missing field [ content ]`);

	return post;
};

const loadMdFile = async (postID: string): Promise<MdFile> => ({
	postID,
	contents: (await import(`./md/blog/${postID}.md`)).default
});

export const loadPost = async (postID: string) =>
	mdToPost(await loadMdFile(postID));

export const loadAllPosts = async () => {
	const mdPaths = sync(`./md/blog/*.md`);
	const allPosts = await Promise.all(
		mdPaths.map((path) => loadMdFile(path.slice(path.indexOf("blog/") + 5, -3)))
	);

	return allPosts.map(mdToPost);
};
