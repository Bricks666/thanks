import React, { FC } from "react";
import { useInstructions, useLoading } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { List } from "../common/List";
import { LoadingWrapper } from "../common/LoadingWrapper";
import { Instruction } from "../Instruction";

export const InstructionList: FC<OnlyClassComponent> = ({ className }) => {
	const instructions = useInstructions();
	const isLoading = useLoading("loadingInstructions");

	return (
		<LoadingWrapper isLoading={isLoading} loadingIndicator={<p>Загрузка...</p>}>
			<List
				className={className}
				items={instructions}
				Card={Instruction}
				type="fake"
				indexedBy="text"
			/>
		</LoadingWrapper>
	);
};
