import React, { FC } from "react";
import Page from "../components/Page";
import TypistLoop from "../components/TypistLoop";
import styles from "../styles/index.module.css";

const Index: FC = () => {
	return (
		<div id={styles.center}>
			<Page nextPage="about">
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
			</Page>
			<Page id="about" nextPage="skills">
				<div className={styles.heading} data-aos="fade-right">
					About
				</div>
			</Page>
			<Page id="skills" nextPage="contact">
				<div className={styles.heading} data-aos="fade-left">
					Skills
				</div>
			</Page>
			<Page id="contact">
				<div className={styles.heading} data-aos="fade-right">
					Contact
				</div>
			</Page>
		</div>
	);
};

export default Index;
