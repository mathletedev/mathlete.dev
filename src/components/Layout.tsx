import Head from "next/head";
import Link from "next/link";
import React, { FC, ReactChild } from "react";
import styles from "../styles/layout.module.css";

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
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
					rel="stylesheet"
				/>
				<link href="/img/favicon.png" rel="icon" />
			</Head>
			<nav id={styles["nav-bar"]}>
				<Link href="/">
					<a className={styles["nav-link"]}>Home</a>
				</Link>
				<Link href="/blog">
					<a className={styles["nav-link"]}>Blog</a>
				</Link>
				<Link href="/about">
					<a className={styles["nav-link"]}>More</a>
				</Link>
			</nav>

			{children}
		</div>
	);
};

export default Layout;
