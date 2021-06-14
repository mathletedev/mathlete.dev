import React, { FC, Fragment } from "react";
import styles from "../styles/page.module.css";

interface Props {
	id?: string;
	nextPage?: string;
}

const Page: FC<Props> = ({ children, id, nextPage }) => {
	return (
		<div className={styles.page} id={id}>
			{children}
			{nextPage && (
				<Fragment>
					<a
						href={`#${nextPage}`}
						data-aos="zoom-in-up"
						data-aos-duration={2000}
						data-aos-delay={1000}
					>
						<svg height={20} width={40} className={styles["next-page"]}>
							<polygon points="0,0 40,0 20,20" />
						</svg>
					</a>
					<div className={styles.divider}></div>
				</Fragment>
			)}
		</div>
	);
};

export default Page;
