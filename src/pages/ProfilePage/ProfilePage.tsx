import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BlockWrapper } from "../../components/common/BlockWrapper";
import { PageWrapper } from "../../components/common/PageWrapper";
import { SectionHeader } from "../../components/common/SectionHeader";
import { PaymentList } from "../../components/PaymentList";
import { Profile } from "../../components/Profile";
import { ProfileNavigation } from "../../components/ProfileNavigation";
import { ProfilePostList } from "../../components/ProfilePostList";
import { OnlyClassComponent } from "../../types/components";

export const ProfilePage: FC<OnlyClassComponent> = () => {
	return (
		<main>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Профиль</SectionHeader>
					<Profile />
					<ProfileNavigation />
					<Routes>
						<Route path="/payments" element={<PaymentList />} />
						<Route path="posts" element={<ProfilePostList />} />
						<Route
							path="*"
							element={<Navigate to="/profile/posts" replace={true} />}
						/>
					</Routes>
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
