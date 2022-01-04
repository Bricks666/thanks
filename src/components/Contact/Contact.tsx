import React, { FC } from "react";
import { ContactComponent } from "../../types/components/Contact";

export const Contact: FC<ContactComponent> = ({ className, name, value,  }) => {
	return (
		<div className={className}>
			<dt>{name}</dt>
			<dd>{value}</dd>
		</div>
	);
};
