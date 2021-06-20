export const dashCapitalize = (str: string) =>
	str
		.split("-")
		.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
		.join(" ");

export const getPageName = (pathname: string) => {
	switch (pathname.slice(1)) {
		case "more":
			return "Rickroll";
		case "blog":
		case "blog/[pid]":
			return "Blog";
	}
};
