import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContactsList } from ".";
import { Contact } from "../../types/redux";

const contacts: Contact[] = [
	{
		id: 1,
		name: "tel",
		value: "23",
	},
	{
		id: 2,
		name: "tel",
		value: "23",
	},
];

jest.mock("../../hooks", () => ({
	useContacts: () => contacts,
}));

describe("<ContactList /> component", () => {
	test("render datalist", () => {
		const { container } = render(<ContactsList />);
		expect(container.querySelector("dl")).toBeTruthy();
	});
	test("render the same element that there are in contacts", () => {
		const { container } = render(<ContactsList />);
		const dl = container.querySelector("dl");
		expect(dl?.children.length).toBe(contacts.length);
	});
	test("render with className", () => {
		const { container } = render(<ContactsList className="test" />);
		expect(container.querySelector(".test")).toBeTruthy();
	});
});
