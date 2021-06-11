import React, { FC, Fragment } from "react";
import styles from "../styles/about.module.css";

const About: FC = () => {
	return (
		<Fragment>
			<div id={styles.blocker}></div>
			<iframe
				src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0"
				allow="autoplay"
				allowFullScreen
				frameBorder={0}
				id={styles.video}
			></iframe>
		</Fragment>
	);
};

export default About;
