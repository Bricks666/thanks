import React from "react";
import { Field as ReactField } from "react-final-form";
import { RenderField } from "../../../types/components";
import { Field } from "../Field";
import { Textarea } from "../Textarea";

export const renderField: RenderField = (field) => {
	if (field.type === "password" || field.type === "text") {
		return (
			<ReactField
				name={field.name.toString()}
				type={field.type}
				render={Field}
				key={field.name.toString()}
			>
				{field.text}
			</ReactField>
		);
	} else {
		return (
			<ReactField
				name={field.name.toString()}
				render={Textarea}
				key={field.name.toString()}
			>
				{field.text}
			</ReactField>
		);
	}
};
