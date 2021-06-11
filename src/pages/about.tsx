import React, { FC } from "react";
import styles from "../styles/about.module.css";

const About: FC = () => {
	return (
		<div id={styles["vid-container"]}>
			<div id={styles.blocker}></div>
			<iframe
				src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0"
				allow="autoplay"
				allowFullScreen
				frameBorder={0}
				id={styles.video}
			></iframe>
		</div>
	);
};

export default About;
