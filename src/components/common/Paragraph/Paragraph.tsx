import React, { FC } from "react";
import classNames from "classnames";
import { ParagraphComponent } from "../../../types/components";

import ParagraphStyle from "./Paragraph.module.css";

export const Paragraph: FC<ParagraphComponent> = ({ className, children }) => {
	return (
		<p className={classNames(ParagraphStyle.paragraph, className)}>
			{children}
		</p>
	);
};
