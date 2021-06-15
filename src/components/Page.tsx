import React, { FC } from "react";
import styles from "../styles/page.module.css";

interface Props {
	id?: string;
	last?: boolean;
}

const Page: FC<Props> = ({ children, id, last }) => {
	return (
		<div className={styles.page} id={id}>
			{children}
			{!last && <div className={styles.divider}></div>}
		</div>
	);
};

export default Page;
