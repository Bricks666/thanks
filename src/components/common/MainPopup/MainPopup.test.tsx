import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MainPopup } from ".";
import "@testing-library/jest-dom";

const closeHandler = jest.fn();

describe("<MainPopup /> component", () => {
	test("dont render content when isOpen false", () => {
		const { container } = render(
			<MainPopup isOpen={false} closeHandler={closeHandler} />
		);

		expect(container).toBeEmptyDOMElement();
	});

	test("render text child", () => {
		const { queryByText } = render(
			<MainPopup isOpen={true} closeHandler={closeHandler}>
				Test
			</MainPopup>
		);
		expect(queryByText("Test")).not.toBeNull();
	});

	test("render node child", () => {
		const { queryByTestId } = render(
			<MainPopup isOpen={true} closeHandler={closeHandler}>
				<div data-testid="div">Test</div>
			</MainPopup>
		);

		expect(queryByTestId("div")).not.toBeNull();
		expect(queryByTestId("div")).toBeInTheDocument();
	});

	test("close modal", () => {
		const { queryByText } = render(
			<MainPopup isOpen={true} closeHandler={closeHandler}>
				<div data-testid="div">Test</div>
			</MainPopup>
		);
		const button = queryByText("Закрыть");
		expect(button).not.toBeNull();
		button && fireEvent.click(button, { bubbles: true });
		expect(closeHandler).toHaveBeenCalledTimes(1);
	});

	test("render with className", () => {
		render(
			<MainPopup className="test" isOpen={true} closeHandler={closeHandler}>
				<div data-testid="div">Test</div>
			</MainPopup>
		);
		expect(document.querySelector(".test")).not.toBeNull();
	});
});
