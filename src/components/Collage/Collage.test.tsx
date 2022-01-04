import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Post } from "../../types/redux";
import { Collage } from ".";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

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
jest.mock("../../hooks", () => ({
	usePosts: () => posts,
}));

const SelectedPost = () => <h2>Selected</h2>;
jest.mock("./SelectedPost/SelectedPost", () => ({
	SelectedPost,
}));
let history = createMemoryHistory();
beforeEach(() => {
	history = createMemoryHistory();
});

const RoutedCollage = (props: { className?: string }) => {
	return (
		<Router location={history.location} navigator={history}>
			<Collage className={props.className} />
		</Router>
	);
};

describe("<Collage /> component", () => {
	test("render the same count posts", () => {
		const { container } = render(<RoutedCollage />);
		expect(container.querySelectorAll("a").length).toBe(posts.length);
	});
	test("render  image with post photo and alt as postHeader", () => {
		const { container } = render(<RoutedCollage />);
		const image = container.querySelector("img");
		expect(image).toHaveAttribute("src", posts[0].photo);
		expect(image).toHaveAttribute("alt", posts[0].postHeader);
	});

	test("redirect when post select", () => {
		const { container } = render(<RoutedCollage />);

		const link = container.querySelector("a");
		link && fireEvent.click(link);
		expect(history.location.search).toBe("?postId=" + posts[0].id);
	});
	test("render with className", () => {
		const { container } = render(<RoutedCollage className="test" />);

		expect(container.querySelector(".test")).toBeTruthy();
	});
});
