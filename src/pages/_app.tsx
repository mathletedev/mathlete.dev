import { AppProps } from "next/app";
import React, { FC } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

const _app: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default _app;
