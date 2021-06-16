import { useRouter } from "next/router";
import React, { FC } from "react";
import { MdMore } from "react-icons/md";
import { __homePages__ } from "../lib/constants";
import styles from "../styles/homenav.module.css";

const HomeNav: FC = () => {
	const router = useRouter();

	return (
		<div id={styles["nav-drawer"]}>
			{Object.keys(__homePages__).map((path) => {
				const Icon = __homePages__[path];

				return (
					<button
						onClick={() => router.push(`#${path}`)}
						className={styles["nav-button-link"]}
						key={path}
					>
						<Icon className={styles["nav-button"]} />
					</button>
				);
			})}
			<button
				onClick={() => router.push("/more")}
				className={styles["nav-button-link"]}
				key="more"
			>
				<MdMore className={styles["nav-button"]} />
			</button>
		</div>
	);
};

export default HomeNav;
