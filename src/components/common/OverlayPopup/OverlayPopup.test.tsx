import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OverlayPopup } from ".";

const closeHandler = jest.fn();

describe("<OverlayPopup /> component", () => {
	test("dont render with isOpen false", () => {
		const { queryByText } = render(
			<OverlayPopup isOpen={false} closeHandler={closeHandler}>
				Test
			</OverlayPopup>
		);

		expect(queryByText("Test")).toBeNull();
	});

	test("render to portal", () => {
		const { container } = render(
			<OverlayPopup isOpen={true} closeHandler={closeHandler}>
				Test
			</OverlayPopup>
		);

		expect(container).not.toContain("Test");
	});

	test("render with text child", () => {
		const { getByText } = render(
			<OverlayPopup isOpen={true} closeHandler={closeHandler}>
				Test
			</OverlayPopup>
		);

		expect(getByText("Test")).not.toBeNull();
	});

	test("render with node child", () => {
		const { queryByTestId } = render(
			<OverlayPopup isOpen={true} closeHandler={closeHandler}>
				<div data-testid="div">Test</div>
			</OverlayPopup>
		);

		expect(queryByTestId("div")).not.toBeNull();
	});

	test("it's a dialog window", () => {
		const { getByRole } = render(
			<OverlayPopup isOpen={true} closeHandler={closeHandler}>
				<div data-testid="div">Test</div>
			</OverlayPopup>
		);

		expect(getByRole("dialog")).not.toBeNull();
	});

	test("overlay has a button role", () => {
		const { getByRole } = render(
			<OverlayPopup isOpen={true} closeHandler={closeHandler}>
				<div data-testid="div">Test</div>
			</OverlayPopup>
		);

		expect(getByRole("button")).not.toBeNull();
	});

	test("close overlay", () => {
		const { getByRole } = render(
			<OverlayPopup isOpen={true} closeHandler={closeHandler}>
				<div data-testid="div">Test</div>
			</OverlayPopup>
		);
		const button = getByRole("button");
		fireEvent.click(button);
		expect(closeHandler).toHaveBeenCalledTimes(1);
	});
});
