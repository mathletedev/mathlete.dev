import Head from "next/head";
import Link from "next/link";
import React, { FC, ReactChild } from "react";

interface Props {
	children: ReactChild;
	title?: string;
}

const Layout: FC<Props> = ({ children, title = "MathleteDev" }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap"
					rel="stylesheet"
				/>
				<link href="/img/favicon.png" rel="icon" />
			</Head>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
				<Link href="/about">
					<a>More</a>
				</Link>
			</nav>

			{children}
		</div>
	);
};

export default Layout;
