import React, { FC, Fragment, useEffect, useState } from "react";
import Typist from "react-typist";
import styles from "../styles/typistloop.module.css";

interface Props {
	words: string[];
}

const TypistLoop: FC<Props> = ({ words }) => {
	const [typing, setTyping] = useState(true);

	useEffect(() => {
		setTyping(true);
	}, [typing]);

	return (
		<Fragment>
			{typing ? (
				<Typist cursor={{ show: false }} onTypingDone={() => setTyping(false)}>
					{words.map((word) => (
						<div key={word}>
							<Typist.Delay ms={1000} />
							<div id={styles["typist-text"]} className="unselectable">
								{word}
							</div>
							<Typist.Backspace count={word.length} delay={1500} />
						</div>
					))}
				</Typist>
			) : (
				""
			)}
		</Fragment>
	);
};

export default TypistLoop;
