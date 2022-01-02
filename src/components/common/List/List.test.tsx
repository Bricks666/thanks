import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { List } from ".";

const items = [{ value: "test" }, { value: "test2" }];
const Component = ({
	value,
	className,
}: {
	value: string;
	className?: string;
}) => {
	return <div className={className}>{value}</div>;
};

describe("<List /> component", () => {
	test("render unnumbered list", () => {
		const { container } = render(
			<List
				items={items}
				Card={Component}
				indexedBy="value"
				type="unnumbered"
			/>
		);
		expect(container.querySelector("ul")).not.toBeNull();
		expect(container.querySelectorAll("div").length).toBe(items.length);
	});

	test("render numbered list", () => {
		const { container } = render(
			<List items={items} Card={Component} indexedBy="value" type="numbered" />
		);
		expect(container.querySelector("ol")).not.toBeNull();
		expect(container.querySelectorAll("div").length).toBe(items.length);
	});

	test("render datalist list", () => {
		const { container } = render(
			<List items={items} Card={Component} indexedBy="value" type="datalist" />
		);
		expect(container.querySelector("dl")).not.toBeNull();
		expect(container.querySelectorAll("div").length).toBe(items.length);
	});

	test("render fake list", () => {
		const { container } = render(
			<List items={items} Card={Component} indexedBy="value" type="fake" />
		);
		expect(container.querySelector("section")).not.toBeNull();
		expect(container.querySelectorAll("div").length).toBe(items.length);
	});

	test("render empty array", () => {
		const { container } = render(
			<List items={[]} Card={Component} indexedBy="value" type="fake" />
		);
		expect(container.querySelectorAll("div").length).toBe(0);
	});

	test("render with className", () => {
		const { container } = render(
			<List
				className="test"
				items={[]}
				Card={Component}
				indexedBy="value"
				type="fake"
			/>
		);
		expect(container.querySelector(".test")).not.toBeNull();
	});
	test("render with itemClassName", () => {
		const { container } = render(
			<List
				itemClassName="test"
				items={items}
				Card={Component}
				indexedBy="value"
				type="fake"
			/>
		);
		expect(container.querySelectorAll(".test").length).toBe(items.length);
	});
});
