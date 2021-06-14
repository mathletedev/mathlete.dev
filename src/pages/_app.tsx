import AOS from "aos";
import "aos/dist/aos.css";
import { AppProps } from "next/app";
import React, { FC, useEffect } from "react";
import Layout from "../components/Layout";
import { getPageName } from "../lib/utils";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			delay: 500,
			once: true
		});
	});

	return (
		<Layout
			title={getPageName(router.pathname)}
			disableNav={router.pathname === "/more"}
		>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
