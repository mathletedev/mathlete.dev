import Link from "next/link";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import ContactCard from "../components/ContactCard";
import HomeNav from "../components/HomeNav";
import Page from "../components/Page";
import SkillsChart from "../components/SkillsChart";
import TypistLoop from "../components/TypistLoop";
import { __contactSites__, __simpleIcons__ } from "../lib/constants";
import styles from "../styles/index.module.css";

const Index: FC = () => {
	const headingRef = useRef(null);

	const [headingHeight, setHeadingHeight] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);

	useEffect(() => {
		setHeadingHeight(headingRef.current.clientHeight || 0);
	}, [headingRef.current?.clientHeight]);

	useEffect(() => {
		const resize = () => {
			setWindowWidth(window.innerWidth);
			setWindowHeight(window.innerHeight);
		};

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
							"TypeScript & Rust User"
						]}
					/>
					<Link
						href={`#about`}
						data-aos="zoom-in-up"
						data-aos-duration={2000}
						data-aos-delay={1000}
					>
						<svg width={40} height={20} id={styles["read-more"]}>
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
					<div id={styles["about-paragraphs"]}>
						<p>
							I am a high school student who codes for fun! I made this website
							portfolio with Next.js, React, and TypeScript.
						</p>
						<p>
							In school, I've participated in many math and science
							competitions, as I enjoy problem solving. In my free time I also
							play the violin!
						</p>
						<p>
							I started programming at the age of 10, when I went to a camp to
							learn some Python. Since then, I've learned C#, JavaScript,
							TypeScript, C++, and Java, and I have made countless projects
							(most of which fail) with the knowledge I have gained!
						</p>
					</div>
				</Page>
				<Page id="skills">
					<div className={styles.heading} data-aos="fade-left">
						Skills
					</div>
					<div
						id={styles["skills-graph"]}
						style={{ height: `calc(100% - ${headingHeight}px)` }}
					>
						<SkillsChart />
					</div>
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
								<Fragment key={i}>
									{(windowWidth < windowHeight ? i % 2 === 0 : i === 3) && (
										<hr id={styles["flex-break"]}></hr>
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
