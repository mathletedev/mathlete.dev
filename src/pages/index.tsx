import React, { FC } from "react";
import TypistLoop from "../components/TypistLoop";
import styles from "../styles/index.module.css";

const Index: FC = () => {
	return (
		<div id={styles.center}>
			<div id={styles.title}>
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
			</div>
		</div>
	);
};

export default Index;
