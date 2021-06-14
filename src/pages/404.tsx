import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

const _404: FC = () => {
	const router = useRouter();

	useEffect(() => {
		router.push("/");
	});

	return <div></div>;
};

export default _404;
