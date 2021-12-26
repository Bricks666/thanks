import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Collage } from "../../components/Collage";
import { SectionHeader } from "../../components/common/SectionHeader";
import { Wrapper } from "../../components/common/Wrapper";
import { OnlyClassComponent } from "../../types/components";

export const PostsPage: FC<OnlyClassComponent> = () => {
	return (
		<main>
			<Wrapper>
				<SectionHeader>Благодарности</SectionHeader>
				<Collage />
				<Routes>
					<Route path=":id" element={<h1>HEHEHEHE</h1>} />
				</Routes>
			</Wrapper>
		</main>
	);
};
