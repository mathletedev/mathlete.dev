import React, { FC } from "react";
import Page from "../components/Page";
import TypistLoop from "../components/TypistLoop";
import styles from "../styles/index.module.css";

const Index: FC = () => {
	return (
		<div id={styles.center}>
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
				<a
					href={`#about`}
					data-aos="zoom-in-up"
					data-aos-duration={2000}
					data-aos-delay={1000}
				>
					<svg height={20} width={40} id={styles["read-more"]}>
						<polygon points="0,0 40,0 20,20" />
					</svg>
				</a>
			</Page>
			<Page id="about">
				<div className={styles.heading} data-aos="fade-right">
					About
				</div>
			</Page>
			<Page id="skills">
				<div className={styles.heading} data-aos="fade-left">
					Skills
				</div>
			</Page>
			<Page id="contact" last>
				<div className={styles.heading} data-aos="fade-right">
					Contact
				</div>
			</Page>
		</div>
	);
};

export default Index;
