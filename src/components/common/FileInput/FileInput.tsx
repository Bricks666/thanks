import React, { ChangeEvent, FC, useCallback } from "react";
import { FileInputComponent } from "../../../types/components";
import { Input } from "../Input";

export const FileInput: FC<FileInputComponent> = ({ input, ...props }) => {
	const onChange = useCallback<
		(evt: ChangeEvent<HTMLInputElement>) => ReturnType<typeof input["onChange"]>
	>(
		(evt) => {

			const files = evt.target.files;
			const file = files && files[0];
			return input.onChange({ target: { value: file } });
		},
		[input.onChange]
	);
	return (
		<Input<undefined>
			{...props}
			input={{ ...input, onChange, value: undefined }}
			type="file"
		/>
	);
};
