import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Collage } from "../../components/Collage";
import { ModalWindow } from "../../components/common/ModalWindow";
import { SectionHeader } from "../../components/common/SectionHeader";
import { Wrapper } from "../../components/common/Wrapper";
import { RoutedPost } from "../../components/RoutedPost";
import { OnlyClassComponent } from "../../types/components";

export const PostsPage: FC<OnlyClassComponent> = () => {
	return (
		<main>
			<Wrapper>
				<SectionHeader>Благодарности</SectionHeader>
				<Collage />
				<Routes>
					<Route path=":id" element={<ModalWindow condition={true}>
						<RoutedPost />
					</ModalWindow>} />
				</Routes>
			</Wrapper>
		</main>
	);
};
