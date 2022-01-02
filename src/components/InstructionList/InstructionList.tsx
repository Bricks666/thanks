import React, { FC } from "react";
import { useInstructions } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { List } from "../common/List";
import { Instruction } from "../Instruction";

export const InstructionList: FC<OnlyClassComponent> = ({ className }) => {
	const instructions = useInstructions();
	return (
		<List
			className={className}
			items={instructions}
			Card={Instruction}
			type="fake"
			indexedBy="text"
		/>
	);
};
