import Link from "next/link";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import ContactCard from "../components/ContactCard";
import HomeNav from "../components/HomeNav";
import Page from "../components/Page";
import TypistLoop from "../components/TypistLoop";
import { __contactSites__, __simpleIcons__ } from "../lib/constants";
import styles from "../styles/index.module.css";

const Index: FC = () => {
	const headingRef = useRef(null);

	const [headingHeight, setHeadingHeight] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setHeadingHeight(headingRef.current.clientHeight || 0);
	}, [headingRef.current?.clientHeight]);

	useEffect(() => {
		const resize = () => setWindowWidth(window.innerWidth);

		resize();
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	});

	return (
		<Fragment>
			<HomeNav />
			<div id="center">
				<Page id="home">
					<div id={styles["title-padding"]}></div>
					<div id={styles.name} className="unselectable">
						MathleteDev
					</div>
					<TypistLoop
						words={[
							"Student",
							"Fisiks Boi",
							"Violinist",
							"Mathlete",
							"TypeScript User"
						]}
					/>
					<Link
						href={`#about`}
						data-aos="zoom-in-up"
						data-aos-duration={2000}
						data-aos-delay={1000}
					>
						<svg height={20} width={40} id={styles["read-more"]}>
							<polygon points="0,0 40,0 20,20" />
						</svg>
					</Link>
				</Page>
				<Page id="about">
					<div
						className={styles.heading}
						data-aos="fade-right"
						ref={headingRef}
					>
						About
					</div>
				</Page>
				<Page id="skills">
					<div className={styles.heading} data-aos="fade-left">
						Skills
					</div>
					<div
						id={styles["skills-graph"]}
						style={{ height: `calc(100% - ${headingHeight}px)` }}
					></div>
				</Page>
				<Page id="contact" last>
					<div className={styles.heading} data-aos="fade-right">
						Contact
					</div>
					<div
						id={styles["center-contacts"]}
						style={{ height: `calc(100% - ${headingHeight}px)` }}
					>
						{Object.keys(__contactSites__).map((site, i) => {
							const siteData = __contactSites__[site];

							return (
								<Fragment>
									{(windowWidth < 900 ? i % 2 === 0 : i === 3) && (
										<hr id={styles["flex-break"]} key={i}></hr>
									)}
									<ContactCard
										url={siteData.url}
										imageUrl={
											siteData.imageUrl
												? siteData.imageUrl
												: `${__simpleIcons__}${site}.svg`
										}
										color={siteData.color}
										key={siteData.url}
									/>
								</Fragment>
							);
						})}
					</div>
				</Page>
			</div>
		</Fragment>
	);
};

export default Index;
