import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal: FC = ({ children }) => {
	const [portal] = useState<HTMLDivElement>(() =>
		document.createElement("div")
	);

	useEffect(() => {
		document.body.appendChild(portal);
		return () => {
			document.body.removeChild(portal);
		};
	}, [portal]);

	return createPortal(children, portal);
};
