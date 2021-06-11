import { AppProps } from "next/app";
import React, { FC } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
	return router.pathname === "/about" ? (
		<Component {...pageProps} />
	) : (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
