import { AppProps } from "next/app";
import React, { FC } from "react";
import Layout from "../components/Layout";
import { getPageName } from "../lib/utils";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
	return (
		<Layout
			title={getPageName(router.pathname)}
			disableNav={router.pathname === "/about"}
		>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
