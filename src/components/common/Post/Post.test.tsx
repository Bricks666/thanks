import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Post } from ".";
import { Post as PostType } from "../../../types/redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const post: PostType = {
	id: 1,
	author: "nanan",
	firstName: "a",
	secondName: "a",
	patronymic: "a",
	postHeader: "a",
	briefAboutPerson: "a",
	whyThanks: "a",
	photo: "11",
	date: "2021-10-10",
};

describe("<Post /> component", () => {
	test("redirect by link", () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Router location={history.location} navigator={history}>
				<Post {...post} />
			</Router>
		);

		const link = container.querySelector("a");
		expect(link).toBeTruthy();
		link && fireEvent.click(link);
		expect(history.location.pathname).toBe(`/posts/${post.id}`);
	});

	test("render with className", () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Router location={history.location} navigator={history}>
				<Post className="test" {...post} />
			</Router>
		);

		expect(container.querySelector(".test")).toBeTruthy();
	});
});
