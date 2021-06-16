import { More } from "@material-ui/icons";
import React, { FC } from "react";
import { __homePages__ } from "../lib/constants";
import styles from "../styles/homenav.module.css";

const HomeNav: FC = () => {
	return (
		<div id={styles["nav-drawer"]}>
			{Object.keys(__homePages__).map((path) => (
				<a href={`#${path}`} className={styles["nav-button-link"]} key={path}>
					{__homePages__[path]}
				</a>
			))}
			<a href="/more" className={styles["nav-button-link"]} key="more">
				<More className={styles["nav-button"]} />
			</a>
		</div>
	);
};

export default HomeNav;
