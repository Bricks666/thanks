import React, { FC } from "react";
import { InstructionComponent } from "../../types/components";
import { Paragraph } from "../common/Paragraph";
import { Picture } from "../common/Picture";

export const Instruction: FC<InstructionComponent> = ({
	className,
	picture,
	text,
}) => {
	return (
		<section className={className}>
			<Picture picture={picture} alt="" />
			<Paragraph>{text}</Paragraph>
		</section>
	);
};
