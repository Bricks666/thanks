import React, { FC } from "react";
import { Field } from "react-final-form";
import { OnlyClassComponent } from "../../types/components";
import { Input } from "../common/Input/Input";
import { escortTypes } from "../../data";
import { MoreInfo } from "../common/MoreInfo";

export const EscortType: FC<OnlyClassComponent> = () => {
	return (
		<fieldset>
			<legend>Сопровождение</legend>
			{escortTypes.map((type) => {
				return (
					<Field
						name="escort"
						type="radio"
						value={type.value}
						render={
							type.hasMoreInfo && type.moreInfo
								? (props) => {
									return (
										<MoreInfo info={type.moreInfo as string}>
											<Input {...props} />
										</MoreInfo>
									);
								}
								: Input
						}
						key={type.value}
					>
						{type.text}
					</Field>
				);
			})}
		</fieldset>
	);
};
