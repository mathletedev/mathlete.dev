import Head from "next/head";
import Link from "next/link";
import React, { FC } from "react";
import { __baseURL__ } from "../lib/constants";
import styles from "../styles/layout.module.css";

interface Props {
	title?: string;
	disableNav?: boolean;
}

const Layout: FC<Props> = ({ children, title, disableNav }) => {
	title = title === "Rickroll" ? undefined : title;

	return (
		<div>
			<Head>
				<title>{title ? `${title} • MathleteDev` : "MathleteDev"}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
					rel="stylesheet"
				/>
				<link href="/icons/1024x1024.png" rel="icon" />
				<meta name="description" content="My personal website" />
				<meta name="author" content="Neal Wang" />
				<meta name="keywords" content="MathleteDev" />
				<meta name="theme-color" content="#87cefa" data-react-helmet="true" />
				<meta name="og:title" content={title || "MathleteDev"} />
				<meta name="og:description" content="My personal website" />
				<meta name="og:site_name" content="MathleteDev" />
				<meta name="og:image" content={`${__baseURL__}/icons/256x256.png}`} />
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			{!disableNav && (
				<nav id={styles["nav-bar"]}>
					<Link href="/">
						<a className={styles["nav-link"]}>Home</a>
					</Link>
					<Link href="/blog">
						<a className={styles["nav-link"]}>Blog</a>
					</Link>
				</nav>
			)}

			{children}
		</div>
	);
};

export default Layout;
