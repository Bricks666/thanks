import { useEffect, useState } from "react";
import { UseKeyListener } from "../types/hooks";

export const useKeyListener: UseKeyListener = (key) => {
	const [isPress, setIsPress] = useState<boolean>(false);

	useEffect(() => {
		document.addEventListener("keydown", (evt) => {
			if (evt.key === key) {
				setIsPress(true);
			}
		});
		return () => {
			document.onkeydown = null;
		};
	}, [setIsPress, key]);

	useEffect(() => {
		document.addEventListener("keyup", (evt) => {
			if (evt.key === key) {
				setIsPress(false);
			}
		});

		return () => {
			document.onkeyup = null;
		};
	}, [setIsPress, key]);

	return isPress;
};
