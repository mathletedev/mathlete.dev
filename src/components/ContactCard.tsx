import React, { FC } from "react";
import styles from "../styles/contactcard.module.css";

interface Props {
	url: string;
	imageUrl: string;
	color: string;
}

const ContactCard: FC<Props> = ({ url, imageUrl, color }) => {
	return (
		<a href={url} target="_blank" key={url}>
			<div
				className={styles["contact-card"]}
				style={{ border: `2px solid ${color}` }}
			>
				<img className={styles["card-icon"]} src={imageUrl} />
			</div>
		</a>
	);
};

export default ContactCard;
