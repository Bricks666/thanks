import { useEffect, useState } from "react";
import { UseHover } from "../types/hooks";

export const useHover: UseHover = (ref) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	useEffect(() => {
		const current = ref.current;
		if (current !== null) {
			current.addEventListener("mouseover", () => {
				setIsHover(true);
			});
			current.addEventListener("mouseleave", () => {
				setIsHover(false);
			});
		}

		return () => {
			if (current !== null) {
				current.onmouseover = null;
				current.onmouseleave = null;
			}
		};
	}, [setIsHover, ref]);
	return isHover;
};
