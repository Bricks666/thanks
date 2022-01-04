import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SelectedPost } from "./SelectedPost";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Post } from "../../../types/redux";

const posts: Post[] = [
	{
		id: 1,
		author: "Rerere",
		firstName: "Валентина",
		secondName: "Сердюк",
		patronymic: "Григорьевна",
		postHeader: "Благодарность моей любимой маме",
		briefAboutPerson:
			" Она родилась в 1952 году и прожила долгую и счастливую жизнь",
		whyThanks: "За все то, что она сделала для меня",
		photo:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.livejournal.com%2Fu3poccuu%2Fpic%2F002482q2&f=1&nofb=1",
		date: "2019-10-10T03:00:00",
	},
];

let history = createMemoryHistory();

jest.mock("../../../hooks/usePost", () => ({
	usePost: (postId: number) => posts.find((post) => post.id === postId) || null,
}));

beforeEach(() => {
	history = createMemoryHistory();
});
const navigateTo = (postId: number) => {
	history.push(history.location.pathname + "?postId=" + postId);
};

const RoutedSelectedPost = (props: { className?: string }) => {
	return (
		<Router location={history.location} navigator={history}>
			<SelectedPost className={props.className} />
		</Router>
	);
};

describe("<SelectedPost /> component", () => {
	test("dont show modal when no search params", () => {
		render(<RoutedSelectedPost />);
		expect(document.body.children.length).toBe(1);
	});
	test("render modal window when postId in search params there is in posts", () => {
		navigateTo(1);
		render(<RoutedSelectedPost />);
		expect(document.body.children.length).toBe(2);
	});
	test("dont render modal window when there is not postId in posts", () => {
		navigateTo(2);
		render(<RoutedSelectedPost />);
		expect(document.body.children.length).toBe(1);
	});
	test("close modal window when press esc and there is post", () => {
		navigateTo(1);
		const { rerender } = render(<RoutedSelectedPost />);

		fireEvent.keyDown(document, { key: "Escape" });
		rerender(<RoutedSelectedPost />);

		expect(document.body.children.length).toBe(1);
	});
	test("do nothing when press esc and there is post", () => {
		const mockUseCallback = jest.fn();
		jest.mock("react", () => ({
			useCallback: () => mockUseCallback(),
		}));
		render(<RoutedSelectedPost />);

		fireEvent.keyDown(document, { key: "Escape" });

		expect(mockUseCallback).toHaveBeenCalledTimes(0);
	});
	test("render with className", () => {
    navigateTo(1)
		render(<RoutedSelectedPost className="test" />);
		expect(document.querySelector(".test")).toBeTruthy();
	});
});
